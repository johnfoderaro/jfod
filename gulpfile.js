'use strict';

const bs = require('browser-sync').create();
const gulp = require('gulp');
const sass = require('gulp-sass');
const maps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');
const babel = require('gulp-babel');
const metalsmithBuild = require('./metalsmith');

// JavaScript pipeline
gulp.task('javascript', () => {
  return gulp.src([
    './src/js/**/*.js',
    '!./src/js/app.js',
    '!./src/js/app.min.js',
    '!./src/js/libraries/**/*.js',
  ])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('app.min.js'))
  .pipe(gulp.dest('./src/js'))
  .pipe(maps.init())
  .pipe(uglify().on('error', gutil.log))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('./src/js'));
});

// CSS pipeline
gulp.task('css', () => {
  return gulp.src('./src/sass/main.scss')
  .pipe(maps.init())
  .pipe(sass({
    outputStyle: 'compressed',
    includePaths: ['./src/sass/mixins/*', './src/sass/partials/*']
  }).on('error', sass.logError))
  .pipe(rename({suffix: '.min'}))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('./src/css'));
});

// Metalsmith build task
gulp.task('build', ['javascript', 'css'], (done) => {
  metalsmithBuild((error, success) => {
    if (error) {
      gutil.log(error);
    } else {
      gutil.log(success);
      bs.reload();
      done();
    }
  });
});

// Browsersync
gulp.task('server', (done) => {
  bs.init({
    server: { baseDir: './build' },
    notify: false
  });
  done();
});

// Default task and watch
gulp.task('default', ['build', 'server'], () => {
  gulp.watch(['src/**/*', 'templates/**/*'], ['build']);
});
