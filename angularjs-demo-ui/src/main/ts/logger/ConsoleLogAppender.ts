import ILogAppender from "./ILogAppender";

export default class ConsoleLogAppender implements ILogAppender {

    info(message : string) : void {
        console.info(message);
    }

}
