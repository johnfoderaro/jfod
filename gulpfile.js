'use strict';

// Gulp depencencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const maps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');
const shell = require('gulp-shell');
const gutil = require('gulp-util');
const babel = require('gulp-babel');

// Express server
const os = require('os');
const interfaces = os.networkInterfaces();
const express = require('express');
const server = express();
const port = 3000;

// CSS asset pipeline
gulp.task('css', () => {
  return gulp.src('./src/sass/main.scss')
  .pipe(maps.init())
  .pipe(sass({
    outputStyle: 'compressed',
    includePaths: ['./src/sass/partials/*', './src/sass/partials/*']
  }).on('error', sass.logError))
  .pipe(rename({suffix: '.min'}))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('./src/css'))
  .pipe(livereload());
});

// JavaScript asset pipeline
gulp.task('javascript', () => {
  return gulp.src([
    './src/js/src/**/*.js',
    '!./src/js/app.js',
    '!./src/js/app.min.js',
    '!./src/js/libraries/**/*.js',
    '!./src/js/maps/**/*.js'
  ])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('app.min.js'))
  .pipe(gulp.dest('./src/js'))
  .pipe(maps.init())
  .pipe(uglify().on('error', gutil.log))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('./src/js'))
  .pipe(livereload());
});

// Build Metalsmith
gulp.task('build', () => {
  return gulp.src('', { read: false })
  .pipe(shell(['node index']).on('error', gutil.log))
  .pipe(livereload());
});

// Express server
gulp.task('server', () => {
  let addresses = [];
  for (let i in interfaces) {
    for (let n in interfaces[i]) {
      let address = interfaces[i][n];
      if (address.family === 'IPv4' && !address.internal) {
        addresses.push(address.address);
      }
    }
  }
  server.use(express.static(__dirname + '/build/'));
  server.listen(port, () => {
    for (let i = 0; i < addresses.length; i++) {
      gutil.log(`Server listening at ${gutil.colors.white(`${addresses[i]}:${port}`)}`);
    }
  });
  livereload.listen();
});

// Default "gulp" task for server, watching, livereload -- basically everything listed above
gulp.task('default', ['build', 'server'], () => {
  gulp.watch(['src/sass/**/*'], ['css', 'build']);
  gulp.watch(['src/js/src/**/*'], ['javascript', 'build']);
  gulp.watch(['src/*', 'templates/**/*', '!src/sass/**/*', '!src/js/src/**/*'], ['build']);
});
