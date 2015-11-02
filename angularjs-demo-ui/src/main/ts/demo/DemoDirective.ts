import BaseDirective from "../utils/BaseDirective";

export default class DemoDirective extends BaseDirective {

    static NAME = "demoMessageBox";

    bindToController = {
        user: "="
    };
    template = `
        <div>
            <div>You've got mail!</div>
            <div>Message: "{{ vm.getMessage(vm.user.username) }}"</div>
        </div>
    `;

    /** Value binded from from Scope */
    name : string;

    constructor(controllerName : string) {
        super(controllerName);
    }

}
