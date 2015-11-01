///ts:ref=angular
/// <reference path="../../../typings/angularjs/angular.d.ts"/> ///ts:ref:generated

import DemoModule from "./demo/DemoModule";
import DemoService from "./demo/DemoService";

let module : angular.IModule = angular.module("app", [DemoModule.name]);

module.run([DemoService.NAME, (demoService : DemoService) => {
    console.info("Application loaded...");
    console.timeEnd("APP_BOOT_TIME");
}]);

export default module;
