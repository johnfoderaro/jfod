const fs = require('fs');

function check(path, callback) {
  fs.stat(path, (err) => {
    if (err) return callback(new Error('Item does not exist!'));
    return callback();
  });
}

describe('build', () => {
  it('should create a \'public\' directory', (done) => {
    check('./public/', (err) => {
      if (err) done(err);
      else done();
    });
  });
  it('should have \'images\' directory', (done) => {
    check('./public/images', (err) => {
      if (err) done(err);
      else done();
    });
  });
  it('should have \'styles/main.css\'', (done) => {
    check('./public/styles/main.css', (err) => {
      if (err) done(err);
      else done();
    });
  });
  // it('should have \'scripts/main.js\'', (done) => {
  //   check('./public/scripts/main.js', (err) => {
  //     if (err) done(err);
  //     else done();
  //   });
  // });
  it('should have \'index.html\'', (done) => {
    check('./public/index.html', (err) => {
      if (err) done(err);
      else done();
    });
  });
  it('should have \'robots.txt\'', (done) => {
    check('./public/robots.txt', (err) => {
      if (err) done(err);
      else done();
    });
  });
  it('should have \'sitemap.xml\'', (done) => {
    check('./public/sitemap.xml', (err) => {
      if (err) done(err);
      else done();
    });
  });
  it('should have \'resume.pdf\'', (done) => {
    check('./public/resume.pdf', (err) => {
      if (err) done(err);
      else done();
    });
  });
});
