module.exports = function(config) {
    config.set({
        autoWatch: false,
        singleRun: true,
        logLevel: config.LOG_DEBUG,
        plugins: [
            "karma-chrome-launcher",
            "karma-jasmine",
            "karma-systemjs",
            "karma-sourcemap-loader"
        ],
        frameworks: [ "systemjs", "jasmine" ],
        browsers: [ "Chrome" ],
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
                "./node_modules/angular-mocks/angular-mocks.js"
            ],
            config: {
                transpiler: null,
                paths: {
                    "systemjs": "bower_components/system.js/dist/system.js",
                    "system-polyfills": "bower_components/system.js/dist/system-polyfills.js",
                    "es6-module-loader": "node_modules/es6-module-loader/dist/es6-module-loader.js",
                    "libs/angular.js": "target/webapp/libs/angular.js",
                    "angular-mocks": "node_modules/angular-mocks/angular-mocks.js"
                }
            }
        }
    });
};
