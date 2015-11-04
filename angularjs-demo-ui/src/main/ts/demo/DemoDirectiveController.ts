import DemoService from "./DemoService";
import { IDemoDirectiveController, IDemoDirectiveView, IUser } from "./DemoDirective";

export default class DemoController implements IDemoDirectiveController {
    static NAME = "DemoController";

    view : IDemoDirectiveView;
    user : IUser;

    constructor(private demoService : DemoService) {
        this.view = {
            message: ""
        }
    }

    init() {
        this.demoService.getHello(this.user.username).then((message : string) => {
            this.view.message = message;
        });
    }

}
