module.exports = function(config) {
    config.set({
        autoWatch: false,
        singleRun: true,
        logLevel: config.LOG_WARN,
        plugins: [
            "karma-chrome-launcher",
            "karma-phantomjs-launcher",
            "karma-jasmine",
            "karma-systemjs",
            "karma-sourcemap-loader",
            "karma-mocha-reporter"
        ],
        reporters: [ "mocha" ],
        frameworks: [ "systemjs", "jasmine" ],
        browsers: [ /* "PhantomJS" , */ "Chrome" ],
        client: {
            captureConsole: true
        },
        preprocessors: {
            "**/*.js": [ "sourcemap" ]
        },
        files: [
            "./target/ts-compiled/**/*Test.js"
        ],
        systemjs: {
            configFile: "./target/ts-compiled/systemjs-config.js",
            serveFiles: [
                "./target/webapp/libs/**/*.js",
                "./target/ts-compiled/**/*.js",
                "./target/ts-compiled/**/*.js.map",
                "./node_modules/angular-mocks/angular-mocks.js"
            ],
            config: {
                transpiler: null,
                paths: {
                    "systemjs": "bower_components/system.js/dist/system.js",
                    "system-polyfills": "bower_components/system.js/dist/system-polyfills.js",
                    "es6-module-loader": "node_modules/es6-module-loader/dist/es6-module-loader.js",
                    "phantomjs-polyfill": "node_modules/phantomjs-polyfill/bind-polyfill.js",
                    "libs/*.js": "target/webapp/libs/*.js",
                    "angular-mocks": "node_modules/angular-mocks/angular-mocks.js"
                }
            }
        }
    });
};
