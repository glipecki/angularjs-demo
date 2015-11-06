import "angular";
import "angular-ui-router";
import "oclazyload";

import LazyModule from "./lazy/LazyModule";
// import LoginRouting from "./login/LoginRouting";
import TasksRouting from "./tasks/TasksRouting";
import DashboardRouting from "./dashboard/DashboardRouting";
import AboutModule from "./about/AboutModule";

import LoggerFactory from "./logger/LoggerFactory";

let module : angular.IModule = angular.module("app", [
    "ui.router",
    "oc.lazyLoad",
    LazyModule.name,
    // LoginRouting.name,
    TasksRouting.name,
    DashboardRouting.name,
    AboutModule.name
  ]
);

module.config(["$urlRouterProvider", "$compileProvider", "$ocLazyLoadProvider", (
    $urlRouterProvider : angular.ui.IUrlRouterProvider,
    $compileProvider : angular.ICompileProvider,
    $ocLazyLoadProvider : oc.ILazyLoadProvider
    ) => {
        $urlRouterProvider.otherwise("/dashboard");
        $compileProvider.debugInfoEnabled(false);
        $ocLazyLoadProvider.config({
            debug: true
        });
    }
]);
module.run([() => {
    console.timeEnd("APP_BOOT_INITIALIZING_TIME");
    console.timeEnd("APP_BOOT_TIME");
}]);


export default module;
