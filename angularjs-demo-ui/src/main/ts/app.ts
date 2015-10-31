///ts:ref=angular
/// <reference path="../../../typings/angularjs/angular.d.ts"/> ///ts:ref:generated

import DemoModule from "./demo/DemoModule";
import DemoService from "./demo/DemoService";

let module : angular.IModule = angular.module("app", [DemoModule.name]);

module.run([DemoService.NAME, (demoService : DemoService) => {
  console.log("Application loaded...");
  console.log("Service test: " + demoService.getHello());
}]);

export default module;
