import "angular";
import "angular-ui-router-extras";
import "oclazyload";

import routing from "./LazyModulesRouting";

let module = angular.module("lazy.futureState", ["ct.ui.router.extras"]);

let capitalize = (what : string) : string => {
  if (!!what) {
    return what.charAt(0).toUpperCase() + (what.length > 1 ? what.slice(1) : "");
  } else {
    return what;
  }
};

module.config(["$futureStateProvider", ($futureStateProvider : any) => {
    $futureStateProvider.stateFactory("systemjs", ["futureState", "$ocLazyLoad", "$q", (futureState : any, $ocLazyLoad : oc.ILazyLoad, $q : ng.IQService) => {
        let moduleDeffer = $q.defer();

        console.time("LOAD_MODULE_" + futureState.module);
        let moduleFile = futureState.module + "/" + capitalize(futureState.module) + "Module.js";
        System.import(moduleFile).then((loadedFile: string) => {
            console.info("system import success");
            $ocLazyLoad.load(loadedFile['default']).then(() => {
                console.info("oc lazy load success");
                console.timeEnd("LOAD_MODULE_" + futureState.module);
                moduleDeffer.resolve();
            }).catch(() => {
                moduleDeffer.resolve();
            });
        }).catch(() => {
            moduleDeffer.resolve();
        });

        return moduleDeffer.promise;
    }]);
    // $futureStateProvider.addResolve(["$http", ($http : ng.IHttpService) => {
    //     $http.get("routing.json").then((resp : any) => {
    //         resp.data.forEach((futureRouting : any) => {
    //             $futureStateProvider.futureState(futureRouting);
    //         });
    //     });
    // }]);
    routing.forEach((futureRouting : any) => {
        $futureStateProvider.futureState(futureRouting);
    });
}]);

export default module;
