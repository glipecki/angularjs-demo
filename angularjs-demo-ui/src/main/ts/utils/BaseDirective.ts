import "angular";

abstract class BaseDirective implements angular.IDirective {

    /** Controller name to inject and bind with Directive */
    controller : string;

    /** Creates empty isolated scope */
    scope = {};

    /** Exports binded controller as standard 'vm' scope variable */
    controllerAs = "vm";

    /** By default restrict to element */
    restrict = "E";

    constructor(controllerName : string) {
        this.controller = controllerName;
    }

}

export default BaseDirective;
