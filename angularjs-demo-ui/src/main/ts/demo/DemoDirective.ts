import BaseDirective from "../utils/BaseDirective";

export default class DemoDirective extends BaseDirective {

    static NAME = "demoMessageBox";

    bindToController = {
        user: "="
    };
    template = `
        <div>
            <div>You've got mail!</div>
            <div ng-show="vm.message">Message: "{{ vm.message }}"</div>
        </div>
    `;

    /** Value binded from directive Scope */
    private name : string;

    constructor(controllerName : string) {
        super(controllerName);
    }

}
