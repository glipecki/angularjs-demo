import "angular";

import LazySystemService from "../lazy/LazySystemService";
import { NAME as ControllerName } from "./ITasksController";

let module = angular.module("tasks.routing", ["ui.router"])

module.config(["$stateProvider", ($stateProvider : angular.ui.IStateProvider) => {
    $stateProvider.state("/tasks", {
        url: "/tasks",
        templateUrl: "tasks/view.tpl.html",
        controllerAs: "vm",
        resolve: {
            loadAsync: LazySystemService.asyncLoadModule("tasks/TasksModule")
        },
        controller: ControllerName
    });
}]);

export default module;
