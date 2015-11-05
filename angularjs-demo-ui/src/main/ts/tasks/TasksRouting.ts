import "angular";

import LazySystemService from "../lazy/LazySystemService";
import { NAME as ControllerName } from "./ITasksController";

let module = angular.module("tasks.routing", ["ui.router"])

module.config(["$stateProvider", ($stateProvider : angular.ui.IStateProvider) => {
    LazySystemService.registerLazyModule($stateProvider, "tasks", ControllerName);
}]);

export default module;
