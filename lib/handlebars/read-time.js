function readTime(contents) {
  let content = contents.data.root.contents.replace(/<\/?[^>]+(>|$)/g, '');
  let matches = content.match(/[\u0400-\u04FF]+|\S+\s*/g);
  let count = matches !== null ? matches.length : 0;
  return Math.ceil(count / 300);
}

module.exports = readTime;
