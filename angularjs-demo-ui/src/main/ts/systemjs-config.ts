///ts:ref=systemjs
/// <reference path="../../../typings/systemjs/systemjs.d.ts"/> ///ts:ref:generated

System.config({
  defaultJSExtensions: true,
  map: {
    "angular": "libs/angular.js",
    "angular-ui-router": "libs/angular-ui-router.js"
  },
  meta: {
    "angular": {
      // default module export configuration: https://github.com/systemjs/systemjs/blob/master/docs/module-formats.md#shim-dependencies
      exports: "angular"
    }
  }
});
