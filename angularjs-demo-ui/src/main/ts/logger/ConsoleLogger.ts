import ILogger from "./ILogger";

export default class ConsoleLogger implements ILogger {
    info(format : string, ...params : any[]) : void {
        let restFormat = format;
        let msg = "";
        while ( restFormat.indexOf("{}") > -1 ) {
            if (params.length < 1) {
                throw "Format requires more parameters than provided!";
            }
            let idx = restFormat.indexOf("{}");
            msg += restFormat.substr(0, idx) + params[0];
            params = params.slice(1)
            restFormat = restFormat.substring(idx + 2);
        }
        msg += restFormat;
        console.info(msg);
    }
}
