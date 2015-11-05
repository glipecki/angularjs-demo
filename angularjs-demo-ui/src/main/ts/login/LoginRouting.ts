import "angular";
import "angular-ui-router";
import "oclazyload";

import LazySystemService from "../lazy/LazySystemService";
import { NAME as ControllerName } from "./ILoginController";

let module = angular.module("login.routing", ["ui.router", "oc.lazyLoad"])

module.config(["$stateProvider", ($stateProvider : angular.ui.IStateProvider) => {
    LazySystemService.registerLazyModule($stateProvider, "login", ControllerName);
}]);

export default module;
