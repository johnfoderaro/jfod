const metalsmith = require('metalsmith');
const highlighter = require('highlighter');

const browserSync = require('metalsmith-browser-sync');
const collections = require('metalsmith-collections');
const debug = require('metalsmith-debug');
const discoverPartials = require('metalsmith-discover-partials');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const paginate = require('metalsmith-paginate');
const permalinks = require('metalsmith-permalinks');
const registerHelpers = require('metalsmith-register-helpers');
const sass = require('metalsmith-sass');
const sitemap = require('metalsmith-sitemap');
const wordcount = require('metalsmith-word-count');

const devBuild = ((process.env.NODE_ENV || '').trim().toLowerCase() !== 'production');

const ms = metalsmith(__dirname);

if (devBuild) {
  ms.use(browserSync({
    server: './public',
    notify: false,
    browser: 'firefox',
    open: false,
    files: [
      'src/**/*.js',
      'src/**/*.md',
      'src/**/*.scss',
      'layouts/**/*.hbs',
      'partials/**/*.hbs',
    ],
  })).use(debug());
}

ms.source('./src')
  .destination('./public')
  .clean(true)
  .use(registerHelpers({
    directory: 'helpers',
  }))
  .use(discoverPartials({
    directory: 'partials',
    pattern: /\.hbs$/,
  }))
  .use(markdown({
    gfm: true,
    tables: true,
    highlight: highlighter(),
  }))
  .use(collections({
    articles: {
      pattern: 'articles/**/*.html',
      sortBy: 'date',
      reverse: true,
    },
  }))
  .use(paginate({
    perPage: 3,
    path: 'articles/page',
  }))
  .use(wordcount({
    metaKeyCount: 'wordCount',
    metaKeyReadingTime: 'readingTime',
    speed: 300,
    seconds: false,
    raw: false,
  }))
  .use(layouts())
  .use(permalinks())
  .use(sass({
    outputStyle: 'compressed',
  }))
  .use(sitemap({
    hostname: 'https://jfod.me',
    lastmod: new Date(),
  }))
  .build((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Metalsmith site successfully built');
    }
  });
