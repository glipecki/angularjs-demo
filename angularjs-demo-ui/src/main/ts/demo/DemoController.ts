import DemoService from "./DemoService";

export default class DemoController {
    static NAME = "DemoController";
    /** for view */
    private message : string;
    /** to bind from directive */
    private user : any;
    constructor(demoService : DemoService) {
        demoService.getHello(this.user.username).success((response : string) => {
            this.message = response;
        });
    }
}
