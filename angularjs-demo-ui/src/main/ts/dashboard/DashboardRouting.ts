import "angular";

import LazySystemService from "../lazy/LazySystemService";
import { NAME as ControllerName } from "./IDashboardController";

let module = angular.module("dashboard.routing", ["ui.router"]);

module.config(["$stateProvider", ($stateProvider : angular.ui.IStateProvider) => {
    LazySystemService.registerLazyModule($stateProvider, "dashboard", ControllerName);
}]);

export default module;
