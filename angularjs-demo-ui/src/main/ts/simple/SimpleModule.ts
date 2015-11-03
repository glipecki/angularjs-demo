import SimpleController from "./SimpleController";
import SimpleModuleRouting from "./SimpleModuleRouting";

export let NAME = "SimpleModule";
export let module : angular.IModule = angular.module(NAME, [SimpleModuleRouting.name]);

module.controller(SimpleController.NAME, [SimpleController]);

export default module;
