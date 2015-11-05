import "angular";
import "angular-ui-router";
import "oclazyload";

let module = angular.module("async1.routing", ["ui.router", "oc.lazyLoad"])
module.config(["$stateProvider", ($stateProvider : angular.ui.IStateProvider) => {
    $stateProvider.state("/async1", {
        url: "/async1",
        templateUrl: "async1/view.tpl.html",
        controllerAs: "vm",
        resolve: {
            loadAsync: ['lazySystem', function(lazySystem : any) {
                return lazySystem.load('async1/Async1Module.js');
            }],
            user: () => {
                return {
                    username: "Grześ"
                };
            }
        },
        controller: "Async1Controller"
    });
}]);

export default module;
