// Metalsmith depencencies
const Metalsmith = require('metalsmith');
const Handlebars = require('handlebars');
const ignore = require('metalsmith-ignore');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const collections = require('metalsmith-collections');
const layouts = require('metalsmith-layouts');
const metallic = require('metalsmith-metallic');
const fs = require ('fs');

//
const util = require('util');

// Handlebars Helpers
const readTime = require('./lib/handlebars/read-time');
const longDate = require('./lib/handlebars/long-date');
const inspect  = require('./lib/handlebars/inspect');

// Metalsmith pipeline
function metalsmithBuild(callback) {
  Metalsmith(__dirname)
  .clean(false)
  .use(ignore([
    'img/src/**/*',
    'sass/**/*',
    'js/src/**/*',
    'js/app.js'
  ]))
  .use(metallic())
  .use(markdown({ gfm: true }))
  .use(collections({
    blog: {
      pattern: 'blog/**/*.md',
      sortBy: 'date',
      reverse: true,
    }
  }))
  .use(permalinks({
    linksets: [{
      match: { collection: 'blog' },
      pattern: 'blog/:title'
    }]
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

const helpers = [
  ['readTime', readTime],
  ['longDate', longDate]
];

for (let i = 0; i < helpers.length; i++) {
  handlebarsHelper(helpers[i][0], helpers[i][1]);
}

function handlebarsHelper(name, helper) {
  Handlebars.registerHelper(name, (item) => {
    return new Handlebars.SafeString(helper(item));
  });
}

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
