module.exports = function (grunt, options) {
    return {
        options: {
            sfx: false,
            baseURL: './target/webapp/',
            sourceMaps: true,
            minify: false,
            configFile: './target/ts-compiled/systemjs-config.js'
        },
        dist: {
            files: [
                {
                    "src": "./target/webapp/app.js",
                    "dest": "./target/webapp/bundle.js"
                }
            ]
        }
    };
};
