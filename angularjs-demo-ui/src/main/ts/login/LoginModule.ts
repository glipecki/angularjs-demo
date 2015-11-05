import { NAME as ControllerName } from "./ILoginController";
import LoginController from "./LoginController";

let module = angular.module("login", []);
module.controller(ControllerName, [LoginController]);

export default module;
