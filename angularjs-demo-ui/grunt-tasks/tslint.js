module.exports = function (grunt, options) {
  return {
    options: {
      configuration: grunt.file.readJSON("tslint.json")
    },
    files: {
      src: [ './src/main/ts/**/*.ts' ]
    }
  };
};
