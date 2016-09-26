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
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const pump = require('pump');

// Express server
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

// Image asset pipeline
gulp.task('image', () => {
  return gulp.src('./src/img/src/*')
  .pipe(imagemin([
    imageminMozjpeg({
      quality: 60
    })
  ]).on('error', gutil.log))
  .pipe(gulp.dest('./src/img'));
});

// Build Metalsmith
gulp.task('build', () => {
  return gulp.src('', { read: false })
  .pipe(shell(['node index']).on('error', gutil.log))
  .pipe(livereload());
});

// Express server
gulp.task('server', () => {
  server.use(express.static(__dirname + '/build/'));
  server.listen(port, () => gutil.log(`Server listening on port ${port}... `));
  livereload.listen();
});

// Default "gulp" task for Express server, watching, livereload
// -- basically everything listed above
gulp.task('default', ['build'], () => {
  server.use(express.static(__dirname + '/build/'));
  server.listen(port, () => gutil.log(`Server listening on port ${port}... `));
  livereload.listen();
  gulp.watch(['src/img/src/**/*'], ['image', 'build']);
  gulp.watch(['src/sass/**/*'], ['css', 'build']);
  gulp.watch(['src/js/src/**/*'], ['javascript', 'build']);
  gulp.watch(['src/*', 'templates/**/*', '!src/sass/**/*', '!src/js/src/**/*'], ['build']);
});
