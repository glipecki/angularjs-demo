import { ITasksController, NAME as ControllerName } from "./ITasksController";

export default class TasksController implements ITasksController {

    demoMessage = ControllerName;

    constructor(private user : any) {
    }

}
