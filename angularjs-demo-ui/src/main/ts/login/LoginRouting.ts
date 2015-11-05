import "angular";
import "angular-ui-router";
import "oclazyload";

import { NAME as ControllerName } from "./ILoginController";

let module = angular.module("login.routing", ["ui.router", "oc.lazyLoad"])
module.config(["$stateProvider", ($stateProvider : angular.ui.IStateProvider) => {
    $stateProvider.state("/login", {
        url: "/login",
        templateUrl: "login/view.tpl.html",
        controllerAs: "vm",
        resolve: {
            loadAsync: ['lazySystem', function(lazySystem : any) {
                return lazySystem.load('login/LoginModule.js');
            }]
        },
        controller: ControllerName
    });
}]);

export default module;
