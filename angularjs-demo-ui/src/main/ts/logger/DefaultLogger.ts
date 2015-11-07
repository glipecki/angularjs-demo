import ILogger from "./ILogger";
import ILogAppender from "./ILogAppender";
import "moment";

enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
    TRACE
}

export default class DefaultLogger implements ILogger {

    constructor(private name: string, private logAppender: ILogAppender) {
    }

    error(format: string, ...params: any[]): void {
        this.logAppender.log(this.buildMessage(format, LogLevel.ERROR, params));
    }

    warn(format: string, ...params: any[]): void {
        this.logAppender.log(this.buildMessage(format, LogLevel.WARN, params));
    }

    info(format: string, ...params: any[]): void {
        this.logAppender.log(this.buildMessage(format, LogLevel.INFO, params));
    }

    debug(format: string, ...params: any[]): void {
        this.logAppender.log(this.buildMessage(format, LogLevel.DEBUG, params));
    }

    trace(format: string, ...params: any[]): void {
        this.logAppender.log(this.buildMessage(format, LogLevel.TRACE, params));
    }

    private buildMessage(format: string, level: LogLevel, ...params: any[]): string {
        let restFormat = format;
        let msg = moment().format() + " [" + LogLevel[level] + "][" + this.name + "] ";
        while (restFormat.indexOf("{}") > -1) {
            if (params.length < 1) {
                throw "Format requires more parameters than provided!";
            }
            let idx = restFormat.indexOf("{}");
            msg += restFormat.substr(0, idx) + params[0];
            params = params.slice(1)
            restFormat = restFormat.substring(idx + 2);
        }
        return msg + restFormat;
    }

}
