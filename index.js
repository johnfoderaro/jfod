'use strict';

const Metalsmith = require('metalsmith');
const Handlebars = require('handlebars');
const ignore = require('metalsmith-ignore');
const markdown = require('metalsmith-markdown');
const templates = require('metalsmith-templates');

const fs = require ('fs');
const gutil = require('gulp-util');

// Metalsmith pipeline
Metalsmith(__dirname)
.use(ignore(['img/src/**/*', 'sass/**/*', 'js/src/**/*', 'js/app.js']))
.use(markdown())
.use(templates('handlebars'))
.destination('./build')
.build((error) => {
  if (error) {
    gutil.log(error);
  } else {
    gutil.log(`Metalsmith build successful!`);
  }
});

// Register Hanlebars partials
// Handlebars.registerPartial('footer-nav', fs.readFileSync(__dirname + '/templates/partials/footer-nav.hbt').toString());
