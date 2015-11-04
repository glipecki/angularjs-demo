import Async1Controller from "./Async1Controller";

console.info("Loading async 1 module");

let module = angular.module("async1", []);
module.controller("Async1Controller", ["user", Async1Controller]);

export default module;
