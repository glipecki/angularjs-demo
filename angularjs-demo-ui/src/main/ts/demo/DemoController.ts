import DemoService from "./DemoService";

export default class DemoController {
  static NAME = "DemoController";
  private demoService : DemoService;
  constructor(demoService : DemoService) {
    this.demoService = demoService;
  }
  getMessage() : string {
    return this.demoService.getHello();
  }
}
