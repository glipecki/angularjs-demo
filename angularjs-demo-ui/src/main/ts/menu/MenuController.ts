import { IMenuController } from "./IMenuController";

export default class MenuController implements IMenuController {
    static NAME = 'MenuController';
    getHelloMessage() {
        return "A nice place for menu :)";
    }
}
