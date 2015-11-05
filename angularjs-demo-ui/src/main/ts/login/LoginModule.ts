import { NAME as ControllerName } from "./ILoginController";
import LoginController from "./LoginController";

let module = angular.module("login", []);
module.controller(ControllerName, [LoginController]);

module.config(["$stateProvider", ($stateProvider : angular.ui.IStateProvider) => {
    // LazySystemService.registerLazyModule($stateProvider, "login", ControllerName);
    $stateProvider.state("/login", {
        url: "/login",
        template: `
            lazy login?
        `
    });
    $stateProvider.state("/login/new", {
        url: "/login/new",
        template: `
            new better login?
        `
    });
}]);


export default module;
