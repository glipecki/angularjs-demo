module.exports = function (grunt, options) {
  return {
    allFiles: [
      'src/main/scss/**/*.scss',
    ],
    options: {
      colorizeOutput: true,
      force: true
    }
  };
};
