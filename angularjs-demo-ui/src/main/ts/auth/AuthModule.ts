import "angular";

import { NAME as IAuthServceName } from "./IAuthService";
import AuthService from "./AuthService";

let module = angular.module("auth", []);

module.service(IAuthServceName, [AuthService]);

export default module;
