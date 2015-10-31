export default class DemoService {
  static NAME : string = 'DemoService';
  constructor() {
    console.log("Bootstraping service 22: " + DemoService.NAME);
  }
  getHello() {
    return "Hello world";
  }
}
