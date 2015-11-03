import DemoService from "./DemoService";

export default class DemoController {
    static NAME = "DemoController";

    /** for view */
    private message : string;
    /** to bind from directive */
    private user : any;

    private demoService : DemoService;

    constructor(demoService : DemoService) {
        this.demoService = demoService;
    }

    init() {
        console.debug("Initialize DemoController with username: " + this.user.username);
        this.demoService.getHello(this.user.username).success((response : string) => {
            this.message = response;
        });
    }
    
}
