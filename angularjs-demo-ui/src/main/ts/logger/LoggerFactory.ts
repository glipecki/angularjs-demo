import ILogger from "./ILogger";
import DefaultLogger from "./DefaultLogger";
import ConsoleLogAppender from "./ConsoleLogAppender";

abstract class LoggerFactory {
    static getLogger(name: string) : ILogger {
        return new DefaultLogger(name, new ConsoleLogAppender());
    }
}

export default LoggerFactory;
