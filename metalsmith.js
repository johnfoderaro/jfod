// Metalsmith depencencies
const Metalsmith = require('metalsmith');
const Handlebars = require('handlebars');
const ignore = require('metalsmith-ignore');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');

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
  .use(markdown({ gfm: true }))
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
