module.exports = function (grunt, options) {
  return {
    typescript: {
      options: {
        spawn: false
      },
      files : [ 'src/main/ts/**/*.ts' ],
			tasks: [ 'typescript', 'newer:copy:typescriptSources', 'newer:copy:typescriptCompiled' ]
    },
    templatesHtml: {
      files : [ './src/main/templates/**/*.html' ],
      tasks: [ 'newer:copy:templatesHtml' ]
    }
  };
};
