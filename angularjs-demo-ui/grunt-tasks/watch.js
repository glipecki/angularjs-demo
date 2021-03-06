module.exports = function (grunt, options) {
  return {
    options: {
        livereload: true,
        spawn: false
    },
    typescript: {
        files: [ 'src/main/ts/**/*.ts' ],
		tasks: [ 'watch-after–typescript' ]
    },
    templatesHtml: {
        files: [ './src/main/templates/**/*.html' ],
        tasks: [ 'watch-after–templates' ]
    },
    appResources: {
        files: [ "./src/main/resources/**/*" ],
        tasks: [ "watch-after-resources" ]
    },
    stylesheets: {
        files: [ './src/main/scss/**/*.scss' ],
        tasks: [ 'watch-after–stylesheets' ]
    }
  };
};
