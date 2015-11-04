exports.config = {
    specs: [
        "./target/ts-compiled/**/*TestFun.js"
    ],
    capabilities: {
      'browserName': 'chrome'
    },
    baseUrl: 'http://localhost:9000/',
    framework: 'jasmine'
};
