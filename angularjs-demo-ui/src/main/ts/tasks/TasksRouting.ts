import "angular";
import "angular-ui-router";
import "oclazyload";

import LazySystemService from "../lazy/LazySystemService";
import { NAME as ControllerName } from "./ITasksController";

let module = angular.module("tasks.routing", ["ui.router", "oc.lazyLoad"])

module.config(["$stateProvider", ($stateProvider : angular.ui.IStateProvider) => {
    LazySystemService.registerLazyModule($stateProvider, "tasks", ControllerName);
}]);

export default module;
