import ILogger from "./ILogger";
import ILogAppender from "./ILogAppender";

export default class DefaultLogger implements ILogger {

    constructor(private logAppender: ILogAppender) {
    }

    info(format: string, ...params: any[]): void {
        this.logAppender.info(this.buildMessage(format, params));
    }

    private buildMessage(format: string, ...params: any[]): string {
        let restFormat = format;
        let msg = "";
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
