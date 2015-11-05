import "angular";
import "angular-ui-router";
import "oclazyload";

import { NAME as ControllerName } from "./IDashboardController";

let module = angular.module("dashboard.routing", ["ui.router", "oc.lazyLoad"])
module.config(["$stateProvider", ($stateProvider : angular.ui.IStateProvider) => {
    $stateProvider.state("/dashboard", {
        url: "/dashboard",
        templateUrl: "dashboard/view.tpl.html",
        controllerAs: "vm",
        resolve: {
            loadAsync: ['lazySystem', function(lazySystem : any) {
                return lazySystem.load('dashboard/DashboardModule.js');
            }]
        },
        controller: ControllerName
    });
}]);

export default module;
