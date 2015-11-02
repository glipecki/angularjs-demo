import BaseDirective from "../utils/BaseDirective";

export default class MenuDirective extends BaseDirective {

    static NAME = "menu";

    templateUrl = "menu/menu.tpl.html";

    constructor(controller : string) {
        super(controller);
    }

}
