module.exports = a => (a === 'index.html' ? '' : `/${a.split('.html')[0]}/`);
