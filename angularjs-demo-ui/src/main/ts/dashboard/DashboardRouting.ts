import "angular";
import "angular-ui-router";
import "oclazyload";

import LazySystemService from "../lazy/LazySystemService";
import { NAME as ControllerName } from "./IDashboardController";

let module = angular.module("dashboard.routing", ["ui.router", "oc.lazyLoad"]);

module.config(["$stateProvider", ($stateProvider : angular.ui.IStateProvider) => {
    LazySystemService.registerLazyModule($stateProvider, "dashboard", ControllerName);
}]);

export default module;
