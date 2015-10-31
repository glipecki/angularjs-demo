module.exports = function (grunt, options) {
  return {
    options: {
      livereload: true,
      spawn: false
    },
    typescript: {
      files: [ 'src/main/ts/**/*.ts' ],
			tasks: [ 'typescript', 'newer:copy:typescriptSources', 'newer:copy:typescriptCompiled' ]
    },
    templatesHtml: {
      files: [ './src/main/templates/**/*.html' ],
      tasks: [ 'newer:copy:templatesHtml' ]
    },
    stylesheets: {
      files: [ './src/main/scss/**/*.scss' ],
      tasks: [ 'compass', 'newer:copy:stylesheets' ]
    }
  };
};
