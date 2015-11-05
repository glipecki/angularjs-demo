import "angular";

import { IAuthService } from "../../auth/IAuthService";
import { ViewModel } from "./UserInfoPaneDirective";

export default class UserInfoPaneController implements ViewModel {

    firstName : string;
    lastName : string;
    username : string;

    constructor(private authService : IAuthService) {
    }

    init() : void {
        let user = this.authService.getCurrentUser();

        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.username = user.username;
    }

}
