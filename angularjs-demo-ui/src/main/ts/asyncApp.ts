import "angular";
import "angular-ui-router";
import "oclazyload";

import Async1Routing from "./async1/Async1Routing";
import Async2Routing from "./async2/Async2Routing";

let module : angular.IModule = angular.module("app", ["ui.router", "oc.lazyLoad", Async1Routing.name, Async2Routing.name]);


module.service('lazySystem', ["$ocLazyLoad", ($ocLazyLoad : oc.ILazyLoad) => {
    return {
        load: (src : string, key : string) => {
          return System.import(src).then((loadedFile : string) => {
            return $ocLazyLoad.load(loadedFile[key || 'default']);
          });
        }
    }
}]);
module.config(["$urlRouterProvider", "$compileProvider", "$ocLazyLoadProvider",(
    $urlRouterProvider : angular.ui.IUrlRouterProvider,
    $compileProvider : angular.ICompileProvider,
    $ocLazyLoadProvider : oc.ILazyLoadProvider) => {
        $urlRouterProvider.otherwise("/demo");
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
