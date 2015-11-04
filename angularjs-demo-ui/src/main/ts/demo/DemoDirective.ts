import BaseDirective from "../utils/BaseDirective";

export interface IUser {
    username : string;
}

export interface IDemoDirectiveView {
    message : string;
}

export interface IDemoDirectiveController {
    view : IDemoDirectiveView;
    user : IUser;
}

export default class DemoDirective extends BaseDirective {
    static NAME = "demoMessageBox";

    bindToController = {
        user : "=user"
    };
    template = `
        <div>
            <div>You've got mail!</div>
            <div ng-show="vm.view.message">Message: "{{ vm.view.message }}"</div>
            <demo-inner-box username="vm.user.username"></demo-inner-box>
        </div>
    `;

    constructor(controllerName : string) {
        super();
        this.controller = controllerName;
    }

}
