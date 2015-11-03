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

    /** By default call controller init() on DOM linking. */
    link = (scope : any, elem : any, attr : any, ctrl : any) => {
        if (ctrl !== undefined && typeof ctrl.init === "function") {
            ctrl.init();
        }
    }

}

export default BaseDirective;
