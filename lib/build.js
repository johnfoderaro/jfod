'use strict';

const metalsmithBuild = require('./metalsmith');

metalsmithBuild((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Metalsmith build complete.');
  }
});
