import "angular";

import LazyModule from "../lazy/LazyModule";
import { ILazyStateProvider } from "../lazy/ILazyStateProvider";
import { NAME as ControllerName } from "./ITasksController";

let module = angular.module("tasks.routing", [LazyModule.name])

module.config(["lazyStateProvider", (lazyStateProvider : ILazyStateProvider) => {
    lazyStateProvider.lazyState("/tasks", {
        url: "/tasks",
        templateUrl: "tasks/view.tpl.html",
        controllerAs: "vm",
        controller: ControllerName,
        module: "tasks/TasksModule",
        resolve: {
            user: () => {
                return {
                    name: "Janek"
                }
            }
        }
    });
}]);

export default module;
