'use strict';

const Metalsmith = require('metalsmith');
const Handlebars = require('handlebars');
const ignore = require('metalsmith-ignore');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const collections = require('metalsmith-collections');
const templates = require('metalsmith-templates');
const fs = require ('fs');
const gutil = require('gulp-util');

// Metalsmith pipeline
Metalsmith(__dirname)
.use(ignore(['img/src/**/*', 'sass/**/*', 'js/src/**/*', 'js/app.js']))
.use(markdown({ gfm: true }))
.use(permalinks({
  linksets: [{
    match: { collection: 'blog' },
    pattern: ':blog/:title'
  }]
}))
.use(collections({
  articles: {
	pattern: "src/blog/*.md",
	sortyBy: "date",
	reverse: true
}}))
.use(templates('handlebars'))
.destination('./build')
.build((error) => {
  if (error) {
    gutil.log(error);
  } else {
    gutil.log(`Metalsmith build successful!`);
  }
});

// Register Hanlears partials
const partials = ['aside', 'footer', 'head', 'navigation', 'scripts'];
for (let i = 0; i < partials.length; i++) {
  Handlebars.registerPartial(`${partials[i]}`, fs.readFileSync(`${__dirname}/templates/partials/${partials[i]}.hbt`).toString());
}

// Register word counter
Handlebars.registerHelper('wordcount', () => {
  return new Handlebars.SafeString('10');
});
