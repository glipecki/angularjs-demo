import { NAME as ControllerName } from "./ILoginController";
import LoginController from "./LoginController";

let module = angular.module("login", []);
module.controller(ControllerName, [LoginController]);

module.config(["$stateProvider", ($stateProvider : angular.ui.IStateProvider) => {
    // LazySystemService.registerLazyModule($stateProvider, "login", ControllerName);
    $stateProvider.state("/login", {
        url: "/login",
        templateUrl: "login/view.tpl.html",
        controllerAs: "vm",
        controller: ControllerName
    });
    $stateProvider.state("/login/new", {
        url: "/login/new",
        template: `
            new better login?
        `
    });
}]);


export default module;
