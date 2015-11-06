module.exports = function (grunt, options) {
    return {
        options: {
            baseURL: './target/webapp/',
            sourceMaps: true,
            minify: true,
            mangle: true,
            configFile: './target/ts-compiled/systemjs-config.js'
        },
        dist: {
            files: [
                {
                    "src": "./target/webapp/index.js",
                    "dest": "./target/webapp/bundle.js"
                },
                {
                    "src": "./target/webapp/login/LoginModule.js",
                    "dest": "./target/webapp/bundle-login.js"
                },
                {
                    "src": "./target/webapp/tasks/TasksModule.js",
                    "dest": "./target/webapp/bundle-tasks.js"
                }
            ]
        }
    };
};
