import "angular";

export default class MenuDirective implements angular.IDirective {
    static NAME = "menu";
    restrict = "E";
    scope = true;
    bindToController = {};
    controller : string;
    controllerAs = "vm";
    templateUrl = "menu/menu.tpl.html";
    constructor(controller : string) {
        this.controller = controller;
    }
}
