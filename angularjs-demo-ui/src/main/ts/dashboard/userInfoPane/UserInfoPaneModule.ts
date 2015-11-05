import "angular";

import UserInfoPaneDirective from "./UserInfoPaneDirective";

let module =  angular.module("dashboard.userInfoPane", []);

module.directive(UserInfoPaneDirective.NAME, [() => {
    return new UserInfoPaneDirective();
}]);

export default module;
