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
            <demo-inner-box username="vm.user.username"></demo-inner-box>
        </div>
    `;

    constructor(controllerName : string) {
        super();
        this.controller = controllerName;
    }

}
