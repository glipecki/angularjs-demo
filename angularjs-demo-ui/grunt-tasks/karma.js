module.exports = function (grunt, options) {
  return {
      default: {
            configFile: './karma.conf.js'
      },
      phantom: {
            configFile: './karma.conf.js',
            browsers: [ "PhantomJS" ]
      }
  };
};
