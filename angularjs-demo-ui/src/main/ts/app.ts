import "angular";
import "angular-ui-router";
import DemoModule from "./demo/DemoModule";
import MenuModule from "./menu/MenuModule";
import SimpleModule from "./simple/SimpleModule";

let module : angular.IModule = angular.module("app", ["ui.router", DemoModule.name, MenuModule.name, SimpleModule.name]);

module.config(["$urlRouterProvider", "$compileProvider", ($urlRouterProvider : angular.ui.IUrlRouterProvider, $compileProvider : angular.ICompileProvider) => {
    $urlRouterProvider.otherwise("/demo");
    $compileProvider.debugInfoEnabled(false);
}]);
module.run([() => {
    console.timeEnd("APP_BOOT_INITIALIZING_TIME");
    console.timeEnd("APP_BOOT_TIME");
}]);


export default module;
