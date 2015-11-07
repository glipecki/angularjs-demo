import "angular";
import "angular-ui-router-extras";
import "oclazyload";
import { ILazyStateProvider } from "./ILazyStateProvider"
import LazyStateProvider from "./LazyStateProvider";
import LoggerFactory from "../logger/LoggerFactory";

import routing from "./LazyModulesRouting";

let module = angular.module("lazy.futureState", ["ct.ui.router.extras"]);

let capitalize = (what: string): string => {
    if (!!what) {
        return what.charAt(0).toUpperCase() + (what.length > 1 ? what.slice(1) : "");
    } else {
        return what;
    }
};

module.provider("lazyState", ["$stateProvider", ($stateProvider: angular.ui.IStateProvider) => {
    return new LazyStateProvider($stateProvider);
}]);

module.config(["$futureStateProvider", ($futureStateProvider: any) => {
    $futureStateProvider.stateFactory("systemjs", ["futureState", "$ocLazyLoad", "$q", (futureState: any, $ocLazyLoad: oc.ILazyLoad, $q: ng.IQService) => {
        let log = LoggerFactory.getLogger("lazy.$futureStateProvider.loader");
        let moduleDeffer = $q.defer();
        let moduleFile = futureState.module + "/" + capitalize(futureState.module) + "Module.js";
        System.import(moduleFile).then((loadedFile: string) => {
            $ocLazyLoad.load(loadedFile['default']).then(() => {
                log.debug("Successfully loaded lazy module [type=futureState, loadedModule={}]", moduleFile);
                moduleDeffer.resolve();
            }).catch(() => {
                moduleDeffer.resolve();
            });
        }).catch(() => {
            moduleDeffer.resolve();
        });
        return moduleDeffer.promise;
    }]);
    routing.forEach((futureRouting: any) => {
        $futureStateProvider.futureState(futureRouting);
    });
}]);

export default module;
