import "angular";

export default class UserInfoPaneDirective implements angular.IDirective {

    static NAME = "userInfoPane";

    replace = true;
    scope = {};
    restrict = "E";
    template = `
        <div>Witaj Zdzisiu! (wyloguj)</div>
    `;

}
