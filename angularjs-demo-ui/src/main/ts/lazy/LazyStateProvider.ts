import "angular";
import "angular-ui-router";
import "oclazyload";
import ILogger from "../logger/ILogger";
import LoggerFactory from "../logger/LoggerFactory";
import { ILazyStateProvider, ILazyState } from "./ILazyStateProvider";

export default class LazyStateProvider implements ILazyStateProvider {
    private static log : ILogger = LoggerFactory.getLogger("lazy.LazyStateProvider");
    static asyncLoadModule(module : string, key? : string) {
        return ['$ocLazyLoad', ($ocLazyLoad: oc.ILazyLoad) => {
            return System.import(module + ".js").then((loadedFile: string) => {
                LazyStateProvider.log.debug("Successfully loaded lazy module [type=routingBased, loadedModule={}]", module);
                return $ocLazyLoad.load(loadedFile[key || 'default']);
            });
        }];
    }
    constructor(private $stateProvider : angular.ui.IStateProvider) {
    }
    state(firstParam: string | angular.ui.IState, secondParam?: angular.ui.IState): angular.ui.IStateProvider {
        if (typeof firstParam === 'string') {
            return this.$stateProvider.state(name, secondParam);
        } else {
            return this.$stateProvider.state(secondParam);
        }
    }
    decorator(name?: string, decorator?: (state: angular.ui.IState, parent: Function) => any): any {
        return this.$stateProvider.decorator(name, decorator);
    }
    lazyState(name: string, config: ILazyState): ILazyStateProvider {
        LazyStateProvider.log.debug("Defining lazy state: {}", name);
        let resolve = config.resolve || {};
        if (!!config.module) {
            if (!!resolve["asyncModuleLoader"]) {
                throw "State already defined async module loader!";
            }
            resolve["asyncModuleLoader"] = LazyStateProvider.asyncLoadModule(config.module);
        }
        config.resolve = resolve;
        this.$stateProvider.state(name, config);
        return this;
    }
    $get() : ILazyStateProvider {
        return this;
    }
}
