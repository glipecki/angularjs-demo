interface ILogger {
    error(format : string, ...params : any[]) : void;
    warn(format : string, ...params : any[]) : void;
    info(format : string, ...params : any[]) : void;
    debug(format : string, ...params : any[]) : void;
    trace(format : string, ...params : any[]) : void;
}

export default ILogger;
