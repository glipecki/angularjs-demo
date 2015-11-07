module.exports = function (grunt, options) {
  return {
    libs: {
      files: [{
        expand: true,
        dest: "./target/webapp/libs/",
        flatten: true,
        src: [
          "bower_components/angular/angular.js",
          "bower_components/system.js/dist/system.js",
          "bower_components/angular-ui-router/release/angular-ui-router.js",
          "bower_components/oclazyload/dist/ocLazyLoad.js",
          "bower_components/ui-router-extras/release/ct-ui-router-extras.js",
          "bower_components/moment/min/moment.min.js"
        ]
      }]
    },
    typescriptCompiled: {
      files: [{
        expand: true,
        cwd: "./target/ts-compiled/",
        dest: "./target/webapp/",
        src: [
          "!.baseDir.js",
          "**/*.js",
          "**/*.js.map"
        ]
      }]
    },
    typescriptSources: {
      files: [{
        expand: true,
        cwd: "./src/main/ts/",
        dest: "./target/webapp/",
        src: [
          "**/*.ts"
        ]
      }]
    },
    templatesHtml: {
      files: [{
        expand: true,
        cwd: "./src/main/templates/",
        dest: "./target/webapp/",
        src: [
          "**/*.html"
        ]
      }]
    },
    appResources: {
        files: [{
            expand: true,
            cwd: "./src/main/resources/",
            dest: "./target/webapp/",
            src: [
                "**/*"
            ]
        }]
    },
    stylesheets: {
      files: [{
        expand: true,
        cwd: "./target/scss-compiled/",
        dest: "./target/webapp/styles",
        src: [
          "**/*.css"
        ]
      }]
    }
  };
};
