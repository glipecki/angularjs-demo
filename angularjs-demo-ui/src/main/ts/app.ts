import "angular";
import "angular-ui-router";
import "oclazyload";

import LoginRouting from "./login/LoginRouting";
import TasksRouting from "./tasks/TasksRouting";
import DashboardRouting from "./dashboard/DashboardRouting";

let module : angular.IModule = angular.module("app", [
    "ui.router",
    "oc.lazyLoad",
    LoginRouting.name,
    TasksRouting.name,
    DashboardRouting.name
  ]
);

module.config(["$urlRouterProvider", "$compileProvider", "$ocLazyLoadProvider",(
    $urlRouterProvider : angular.ui.IUrlRouterProvider,
    $compileProvider : angular.ICompileProvider,
    $ocLazyLoadProvider : oc.ILazyLoadProvider) => {
        $urlRouterProvider.otherwise("/dashboard");
        $compileProvider.debugInfoEnabled(false);
    $ocLazyLoadProvider.config({
            debug: true
        });
}]);
module.run([() => {
    console.timeEnd("APP_BOOT_INITIALIZING_TIME");
    console.timeEnd("APP_BOOT_TIME");
}]);


export default module;
