import "angular";
import "angular-ui-router";
import DemoModuleRouting from "./DemoModuleRouting";
import DemoService from "./DemoService";
import DemoController from "./DemoController";
import DemoDirective from "./DemoDirective";

export let NAME = "DemoModule";
export let module : angular.IModule = angular.module(NAME, [DemoModuleRouting.name]);

module.service(DemoService.NAME, [DemoService]);
module.controller(DemoController.NAME, [DemoService.NAME, DemoController]);
module.directive(DemoDirective.NAME, () => {
    return new DemoDirective(DemoController.NAME);
});

export default module;
