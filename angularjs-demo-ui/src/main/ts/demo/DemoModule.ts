///ts:ref=angular
/// <reference path="../../../../typings/angularjs/angular.d.ts"/> ///ts:ref:generated

import DemoService from "./DemoService";

export let NAME = "DemoModule";
export let module : angular.IModule = angular.module(NAME, []);

module.service(DemoService.NAME, [DemoService]);

export default module;
