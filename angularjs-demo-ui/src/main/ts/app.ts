import "angular";
import DemoModule from "./demo/DemoModule";
import MenuModule from "./menu/MenuModule";

let module : angular.IModule = angular.module("app", [DemoModule.name, MenuModule.name]);

module.run([() => {
    console.timeEnd("APP_BOOT_TIME");
}]);

export default module;
