'use strict';

const bs = require('browser-sync').create();
const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const shell = require('gulp-shell');
const maps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');
const metalsmithBuild = require('./lib/metalsmith');

// CSS pipeline
gulp.task('css', () => {
  return gulp.src('./src/sass/main.scss')
  .pipe(maps.init())
  .pipe(sass({
    outputStyle: 'compressed',
    includePaths: [
      './src/sass/mixins/*',
      './src/sass/partials/*',
    ]
  }).on('error', sass.logError))
  .pipe(rename({suffix: '.min'}))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('./src/css'));
});

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

// TODO Add image asset pipeline

// Metalsmith build task
gulp.task('build', (done) => {
  metalsmithBuild((error) => {
    if (error) {
      gutil.log(error);
    } else {
      done();
      bs.reload();
    }
  });
});

// Browsersync
gulp.task('browsersync', (done) => {
  bs.init(null, {
    proxy: 'http://localhost:3000',
    notify: false,
    port: 3001
  }, () => done());
});

// Express
gulp.task('express', (done) => {
  gulp.src('/', { read: false })
  .pipe(shell(['node ./bin/www']));
  done();
});

// Default production task
gulp.task('production', ['express', 'build']);

// Default development task
gulp.task('default', ['express', 'browsersync', 'build'], () => {
  // Watch Sass
  gulp.watch(['src/sass/**/*'], ['css']);
  // Watch JavaScript
  gulp.watch(['src/js/src/**/*'], ['javascript']);
  // Watch for Handlebars and/or HTML, build site
  gulp.watch([
    'templates/**/*.html',
    'templates/**/*.hbt',
    'src/**/*.html',
    'src/**/*.hbt',
    'src/**/*.md',
    'src/css/**/*.css',
    'src/css/**/*.map',
    'src/js/*.js',
    'src/js/*.map',
    'src/js/libraries/**/*.js',
    'src/js/libraries/**/*.map',
    'src/img/**/*'
  ], ['build']);
});
