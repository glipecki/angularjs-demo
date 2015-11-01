module.exports = function (grunt, options) {
  return {
    libs: {
      files: [{
        expand: true,
        dest: './target/webapp/libs/',
        flatten: true,
        src: [
          'bower_components/angular/angular.js',
          'bower_components/system.js/dist/system.js'
        ]
      }]
    },
    typescriptCompiled: {
      files: [{
        expand: true,
        cwd: './target/ts-compiled/',
        dest: './target/webapp/',
        src: [
          '!.baseDir.js',
          '**/*.js',
          '**/*.js.map'
        ]
      }]
    },
    typescriptSources: {
      files: [{
        expand: true,
        cwd: './src/main/ts/',
        dest: './target/webapp/',
        src: [
          '**/*.ts'
        ]
      }]
    },
    templatesHtml: {
      files: [{
        expand: true,
        cwd: './src/main/templates/',
        dest: './target/webapp/',
        src: [
          '**/*.html'
        ]
      }]
    },
    stylesheets: {
      files: [{
        expand: true,
        cwd: './target/scss-compiled/',
        dest: './target/webapp/styles',
        src: [
          '**/*.css'
        ]
      }]
    }
  };
};
