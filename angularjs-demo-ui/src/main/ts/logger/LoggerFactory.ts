import ILogger from "./ILogger";
import ConsoleLogger from "./ConsoleLogger";

abstract class LoggerFactory {
    static getLogger() : ILogger {
        return new ConsoleLogger();
    }
}

export default LoggerFactory;
