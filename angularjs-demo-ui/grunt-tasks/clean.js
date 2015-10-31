module.exports = function (grunt, options) {
  return [
    './target/ts-compiled/*',
    './target/scss-compiled/*',
    './target/webapp/*'
  ];
};
