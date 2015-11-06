import ILogger from "./ILogger";
import DefaultLogger from "./DefaultLogger";
import ConsoleLogAppender from "./ConsoleLogAppender";

abstract class LoggerFactory {
    static getLogger() : ILogger {
        return new DefaultLogger(new ConsoleLogAppender());
    }
}

export default LoggerFactory;
