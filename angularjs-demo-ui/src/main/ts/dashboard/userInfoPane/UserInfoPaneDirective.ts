import "angular";

import { initOnLink } from "../../util/DirectiveUtil";

export interface ViewModel {

    firstName : string;

    lastName : string;

    username : string;

}

export default class UserInfoPaneDirective implements angular.IDirective {

    static NAME = "userInfoPane";

    replace = true;
    scope = {};
    restrict = "E";
    template = `
        <div>Witaj {{ vm.firstName }} {{ vm.lastName }}! (wyloguj)</div>
    `;
    controllerAs = "vm";
    link = initOnLink;

    constructor(public controller : string) {
    }

}
