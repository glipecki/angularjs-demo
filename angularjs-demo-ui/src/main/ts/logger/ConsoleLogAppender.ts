import ILogAppender from "./ILogAppender";

export default class ConsoleLogAppender implements ILogAppender {

    log(message : string) : void {
        console.log(message);
    }

}
