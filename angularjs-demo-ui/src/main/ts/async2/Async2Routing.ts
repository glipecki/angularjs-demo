import "angular";
import "angular-ui-router";
import 'oclazyload';

let module = angular.module("async2.routing", ["ui.router", "oc.lazyLoad"])
module.config(["$stateProvider", ($stateProvider : angular.ui.IStateProvider) => {
    $stateProvider.state("/async2", {
        url: "/async2",
        templateUrl: "async2/view.tpl.html",
        controllerAs: "vm",
        resolve: {
            loadAsync: ['lazySystem', function(lazySystem : any) {
                return lazySystem.load('async2/Async2Module.js');
            }]
        },
        controller: "Async2Controller"
    });
}]);

export default module;
