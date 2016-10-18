// Metalsmith depencencies
const Metalsmith = require('metalsmith');
const Handlebars = require('handlebars');
const ignore = require('metalsmith-ignore');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const collections = require('metalsmith-collections');
const layouts = require('metalsmith-layouts');
const fs = require ('fs');

const util = require('util');

// Handlebars Helpers
const readTime = require('./lib/handlebars/read-time');
const dateFormat = require('./lib/handlebars/date-format');

// Metalsmith pipeline
function metalsmithBuild(callback) {
  Metalsmith(__dirname)
  .use(ignore([
    'img/src/**/*',
    'sass/**/*',
    'js/src/**/*',
    'js/app.js'
  ]))
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
    }
  }))
  .use(layouts({
    engine:    'handlebars',
    directory: './templates/',
    partials:  './templates/partials/'
  }))
  .destination('./build')
  .use(metalsmithDebug(false))
  .build((error) => {
    if (error) {
      callback(error);
    } else {
      callback();
    }
  });
}

Handlebars.registerHelper('readTime', (item) => {
  return new Handlebars.SafeString(readTime(item));
});

Handlebars.registerHelper('dateFormat', (date)=> {
  return new Handlebars.SafeString(dateFormat(date));
});

function metalsmithDebug(log) {
  return function(files, metalsmith, done) {
    if (log) {
      console.log('\nMetaData:');
      console.log(metalsmith.metadata());
      for (let item in files) {
        console.log('\nFile:');
        console.log(files[item]);
      }
    }
    done();
  };
}

module.exports = metalsmithBuild;
