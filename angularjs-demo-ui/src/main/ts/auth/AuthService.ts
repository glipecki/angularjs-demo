import { IAuthService } from "./IAuthService";
import User from "./User";

export default class AuthService implements IAuthService {

    getCurrentUser() : User {
        return new User("Janek", "Wielki", "jgreat");
    }

}
