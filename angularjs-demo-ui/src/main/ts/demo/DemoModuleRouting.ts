import "angular";
import "angular-ui-router";

export let NAME = "DemoModuleRouting";
export let module : angular.IModule = angular.module(NAME, ["ui.router"]);

module.config(["$stateProvider", ($stateProvider : angular.ui.IStateProvider) => {
    $stateProvider.state("/demo", {
        url: "/demo",
        templateUrl: "demo/demo.tpl.html",
        resolve: {
            user: () => {
                return {
                    username: "Grzegorz"
                };
            }
        },
        controllerAs: "vm",
        controller: ["user", function(user : any) {
            this.user = user;
        }]
    });
}]);

export default module;
