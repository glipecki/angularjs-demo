import "angular";
import DemoService from "./DemoService";
import DemoController from "./DemoController";

export let NAME = "DemoModule";
export let module : angular.IModule = angular.module(NAME, []);

module.service(DemoService.NAME, [DemoService]);
module.controller(DemoController.NAME, [DemoService.NAME, DemoController]);

export default module;
