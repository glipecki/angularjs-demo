import DemoService from "./DemoService";
import { IDemoDirectiveController, IDemoDirectiveView, IUser } from "./DemoDirective";

export default class DemoController implements IDemoDirectiveController {
    static NAME = "DemoController";

    view : IDemoDirectiveView;
    user : IUser;

    private demoService : DemoService;

    constructor(demoService : DemoService) {
        this.demoService = demoService;
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
