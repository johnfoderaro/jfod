//es2015 test

'use strict';

const testText = 'this is a test';

function logger(text, callback) {
  callback(text);
}

logger(testText, (result) => {
  console.log(`This is the result: ${result}`);
});
