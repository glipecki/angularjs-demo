import "angular";

import { NAME as ControllerName } from "./IAboutController";
import AboutController from "./AboutController";

let module = angular.module("about", ["ui.router"]);

module.controller(ControllerName, [AboutController]);
module.config(["$stateProvider", ($stateProvider : angular.ui.IStateProvider) => {
    $stateProvider.state("/about", {
        url: "/about",
        templateUrl: "about/view.tpl.html",
        controllerAs: "vm",
        controller: ControllerName
    });
}]);

export default module;
