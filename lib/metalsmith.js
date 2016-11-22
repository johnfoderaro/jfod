// Metalsmith depencencies
const Handlebars = require('handlebars');
const Metalsmith = require('metalsmith');
const ignore = require('metalsmith-ignore');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');

// Metalsmith pipeline
function metalsmithBuild(callback) {
  Metalsmith(__dirname + './../')
  .clean(true)
  .use(ignore([
    'templates/**/*',
    'img/src/**/*',
    'sass/**/*',
    'js/src/**/*',
    'js/app.js'
  ]))
  .use(markdown({ gfm: true }))
  .use(layouts({
    engine:    'handlebars',
    directory: './src/templates/',
    partials:  './src/templates/partials/'
  }))
  .destination('./public')
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
