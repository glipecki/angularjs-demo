import "angular";
import "angular-ui-router";

import SimpleController from "./SimpleController";

export let NAME = "SimpleModuleRouting";
export let module : angular.IModule = angular.module(NAME, ["ui.router"]);

module.config(["$stateProvider", ($stateProvider : angular.ui.IStateProvider) => {
    $stateProvider.state("/simple", {
        url: "/simple",
        templateUrl: "simple/simple.tpl.html",
        controllerAs: "vm",
        resolve: {
            user: function() {
                return {
                    username: "Janek"
                };
            }
        },
        controller: ["user", SimpleController]
    });
}]);

export default module;
