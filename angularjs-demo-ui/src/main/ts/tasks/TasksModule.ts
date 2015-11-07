import { NAME as ControllerName } from "./ITasksController";
import TasksController from "./TasksController";

let module = angular.module("tasks", []);
module.controller(ControllerName, ["user", TasksController]);

export default module;
