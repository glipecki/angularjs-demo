module.exports = function (grunt, options) {
  return {
    typescript: {
      options: {
        spawn: false,
        cwd: './src/main/ts/'
      },
      files : [ '**/*.ts' ],
			tasks: [ 'typescript', 'copy:typescriptSources', 'copy:typescriptCompiled' ]
    },
    templatesHtml: {
      files : [ './src/main/templates/**/*.html' ],
      tasks: [ 'copy:templatesHtml' ]
    }
  };
};
