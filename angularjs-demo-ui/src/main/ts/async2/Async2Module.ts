import Async2Controller from "./Async2Controller";

console.info("Loading async 2 module");

let module = angular.module("async2", []);
module.controller("Async2Controller", [Async2Controller]);
module.directive("asyncDirective", [() => {
    return {
        scope: {},
        restrict: "E",
        template: `
            <span>Hello from async directive</span>
        `
    };
}]);

export default module;
