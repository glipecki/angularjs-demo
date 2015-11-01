module.exports = function (grunt, options) {
  return {
    options: {
      singleRun: true,
      autoWatch: false,
      frameworks: [ 'jasmine' ],
      reporters: [ 'mocha', 'junit' ],
      browsers: [ 'Chrome' ],
      preprocessors: {
        '**/*.js': ['sourcemap']
      },
      client: {
        captureConsole: true
      },
      plugins: [
        'karma-systemjs',
				'karma-jasmine',
        'karma-chrome-launcher',
        'karma-phantomjs-launcher',
				'karma-mocha-reporter',
        'karma-sourcemap-loader',
        'karma-junit-reporter'
		  ],
      logLevel: 'LOG_INFO'
    },
    unit: {
      files: {
        src: [
          'target/tests/**/*Test.js'
        ]
      }
    }
  };
};
