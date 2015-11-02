import app from "../app";
import { IMenuController } from "./IMenuController";
import MenuController from "./MenuController";
import MenuDirective from "./MenuDirective";

export let NAME = "MenuModule";
export let module : angular.IModule = angular.module(NAME, []);

module.controller(MenuController.NAME, [MenuController]);
module.directive(MenuDirective.NAME, () : angular.IDirective => {
    return new MenuDirective(MenuController.NAME);
});

export default module;
