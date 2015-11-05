import "angular";
import UserInfoPaneModule from "./userInfoPane/UserInfoPaneModule";

import { NAME as ControllerName } from "./IDashboardController";
import DashboardController from "./DashboardController";

let module = angular.module("dashboard", [UserInfoPaneModule.name]);
module.controller(ControllerName, [DashboardController]);

export default module;
