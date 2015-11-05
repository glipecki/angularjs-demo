import "angular";
import "angular-ui-router";
import "oclazyload";

import { NAME as ControllerName } from "./ITasksController";

let module = angular.module("tasks.routing", ["ui.router", "oc.lazyLoad"])
module.config(["$stateProvider", ($stateProvider : angular.ui.IStateProvider) => {
    $stateProvider.state("/tasks", {
        url: "/tasks",
        templateUrl: "tasks/view.tpl.html",
        controllerAs: "vm",
        resolve: {
            loadAsync: ['lazySystem', function(lazySystem : any) {
                return lazySystem.load('tasks/TasksModule.js');
            }]
        },
        controller: ControllerName
    });
}]);

export default module;
