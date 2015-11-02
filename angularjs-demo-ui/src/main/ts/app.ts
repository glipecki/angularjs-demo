import "angular";
import DemoModule from "./demo/DemoModule";

let module : angular.IModule = angular.module("app", [DemoModule.name]);

module.run([() => {
    console.timeEnd("APP_BOOT_TIME");
}]);

export default module;
