import "angular";

import AuthModule from "../../auth/AuthModule";
import UserInfoPaneDirective from "./UserInfoPaneDirective";
import { NAME as IAuthServiceName } from "../../auth/IAuthService";
import UserInfoPaneController from "./UserInfoPaneController";

let module =  angular.module("dashboard.userInfoPane", [AuthModule.name]);

module.controller("UserInfoPaneDirectiveController", [IAuthServiceName, UserInfoPaneController]);
module.directive(UserInfoPaneDirective.NAME, [() => {
    return new UserInfoPaneDirective("UserInfoPaneDirectiveController");
}]);

export default module;
