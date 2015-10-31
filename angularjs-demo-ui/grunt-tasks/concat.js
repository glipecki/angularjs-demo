module.exports = function (grunt, options) {
  return {
    options: {
					stripBanners: true,
					banner: '/*! <%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %> */\n',
					separator: '\n'
			},
      vendor: {
				src: [
          './bower_components/system.js/dist/system.js',
          './bower_components/angular/angular.js'
         ],
				dest: './target/webapp/vendor.js'
			}
  };
};
