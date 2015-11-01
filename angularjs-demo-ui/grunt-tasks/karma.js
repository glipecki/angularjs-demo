module.exports = function (grunt, options) {
  return {
    options: {
      singleRun: true,
      autoWatch: false,
      frameworks: [  'systemjs', 'jasmine' ],
      reporters: [ 'mocha', 'junit' ],
      browsers: [ /* 'PhantomJS', */ 'Chrome' ],
      preprocessors: {
        '**/*.js': ['sourcemap']
      },
      // basePath
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
      logLevel: 'LOG_INFO',
      junitReporter: {
        outputFile: 'target/test-results/unit.xml',
        useBrowserName: false,
        suite: 'unit'
      },
      files: [
        // 'bower_components/angular/angular.js',
        // 'bower_components/angular-mocks/angular-mocks.js'
      //
      //   'target/tests/vendor-tests.js',
      //   // {pattern: 'bower_components/angular/angular.js', included: true, served: true},
      //   // {pattern: 'bower_components/angular-mocks/angular-mocks.js', included: true, served: true}
      // node_modules/karma-systemjs/lib/adapter.js
      //
      //   // 'bower_components/angular/angular.js'
      //   // 'bower_components/angular-mocks/angular-mocks.js'
        // 'target/tests/**/*Test.js'
      ],
      systemjs: {
        configFile: 'target/tests/systemjs-config.js',
        // includeFiles: [
        //   'target/tests/vendor-tests.js'
        // ],
        // files: [
        //   'target/tests/vendor-tests.js'
        // ],
        // serveFiles: [
        //   'target/tests/**/*'
        // ],
        config: {
          transpiler: null,
          paths: {
            'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
            'systemjs': 'node_modules/systemjs/dist/system.js',
            'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
            'phantomjs-polyfill': 'node_modules/phantomjs-polyfill/bind-polyfill.js'
          }
        }
      }
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
