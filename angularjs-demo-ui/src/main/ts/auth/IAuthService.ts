import User from "./User";

export let NAME = "IAuthService";

export interface IAuthService {

    getCurrentUser() : User;

}
