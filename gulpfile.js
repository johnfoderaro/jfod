'use strict';
// TODO Add image asset pipeline

// Browsersync
const bs = require('browser-sync').create();

// Gulp dependencies
const gulp = require('gulp');
const copy = require('gulp-copy');
const sass = require('gulp-sass');
const maps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');
const babel = require('gulp-babel');

// Metalsmith
const metalsmithBuild = require('./metalsmith');

// Browsersync server
gulp.task('server', () => {
  return bs.init({
    server: { baseDir: './build' },
    notify: false
  });
});

// CSS pipeline
gulp.task('css', () => {
  return (() => {
    gulp.src('./src/sass/main.scss')
    .pipe(maps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [
        './src/sass/mixins/*',
        './src/sass/partials/*'
      ]
    }).on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('./src/css'))
    .on('end', () => metalsmithBuild(gutil, bs));
  })();
});

// JavaScript pipeline
gulp.task('javascript', () => {
  return (() => {
    gulp.src([
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
    .pipe(gulp.dest('./src/js'))
    .on('end', () => metalsmithBuild(gutil, bs));
  })();
});

// Metalsmith build task
gulp.task('build', () => {
  metalsmithBuild(gutil, bs);
});

// Watch tasks
gulp.task('default', ['build', 'server'], () => {
  gulp.watch(['src/sass/**/*'], ['css']);
  gulp.watch(['src/js/src/**/*'], ['javascript']);
  // gulp.watch(image stuff);
  gulp.watch([
    'src/**/*',
    'src/img**/*',
    'templates/**/*',
    '!src/sass/**/*',
    '!src/js/src/**/*'
  ], ['build']);
});
