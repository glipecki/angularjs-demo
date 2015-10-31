module.exports = function (grunt, options) {
  return {
    typescript: {
      options: {
        spawn: false
      },
      files : [ 'src/main/ts/**/*.ts' ],
			tasks: [ 'typescript', 'copy:typescriptSources', 'copy:typescriptCompiled' ]
    },
    templatesHtml: {
      files : [ './src/main/templates/**/*.html' ],
      tasks: [ 'copy:templatesHtml' ]
    }
  };
};
