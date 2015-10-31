///ts:ref=angular
/// <reference path="../../../../typings/angularjs/angular.d.ts"/> ///ts:ref:generated

import DemoService from './DemoService';

export let NAME : string = 'DemoModule';
export let module : angular.IModule = angular.module(NAME + 'test', []);

module.service(DemoService.NAME, [DemoService]);

export default module;
