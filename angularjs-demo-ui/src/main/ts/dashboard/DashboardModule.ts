import { NAME as ControllerName } from "./IDashboardController";
import DashboardController from "./DashboardController";

let module = angular.module("dashboard", []);
module.controller(ControllerName, [DashboardController]);

export default module;
