module.exports = function (grunt, options) {
  return {
    main: {
      options: {
        sassDir: 'src/main/scss',
        cssDir: 'target/scss-compiled'
      }
    }
  };
};
