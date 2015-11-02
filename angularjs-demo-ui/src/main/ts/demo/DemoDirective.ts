import "angular";

export default class DemoDirective implements angular.IDirective {
    static NAME = "demoSpan";

    restrict = "E";
    scope = true;
    controller : string;
    controllerAs = "vm";

    bindToController = {
        name: "@"
    };
    template = `
        <span>{{ vm.getMessage(vm.name) }}</span>
    `;

    /** Value from Scope */
    name:string;

    constructor(controller : string) {
        this.controller = controller;
    }
}
