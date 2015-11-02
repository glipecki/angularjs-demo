import { IDemoController } from "./IDemoController";
import DemoService from "./DemoService";

export default class DemoController implements IDemoController {
    static NAME = "DemoController";
    private demoService : DemoService;
    constructor(demoService : DemoService) {
        this.demoService = demoService;
    }
    getMessage(name : string) : string {
        return this.demoService.getHello(name);
    }
}
