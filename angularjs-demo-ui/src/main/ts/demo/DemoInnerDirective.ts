import BaseDirective from "../utils/BaseDirective";

export default class DemoInnerDirective extends BaseDirective {

    static NAME = "demoInnerBox";

    scope = {
        username: "="
    };
    template = `
        <div ng-show="username">
            Oh mighty {{ username }}!
        </div>
    `;

}
