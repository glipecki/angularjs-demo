import "angular";
import "angular-ui-router";
import DemoModuleRouting from "./DemoModuleRouting";
import DemoService from "./DemoService";
import DemoDirectiveController from "./DemoDirectiveController";
import DemoDirective from "./DemoDirective";
import DemoInnerDirective from "./DemoInnerDirective";

export let NAME = "DemoModule";
export let module : angular.IModule = angular.module(NAME, [DemoModuleRouting.name]);

module.service(DemoService.NAME, ["$http", "$q", DemoService]);
module.controller(DemoDirectiveController.NAME, [DemoService.NAME, DemoDirectiveController]);
module.directive(DemoDirective.NAME, [() => {
    return new DemoDirective(DemoDirectiveController.NAME);
}]);
module.directive(DemoInnerDirective.NAME, [() => {
    return new DemoInnerDirective();
}]);

export default module;
