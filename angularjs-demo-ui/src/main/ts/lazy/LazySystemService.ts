import "oclazyload";

angular.module("lazy.systemService", ["oc.lazyLoad"])

export default class LazySystemService {
    static asyncLoadModule(module : string, key? : string) {
        return ['$ocLazyLoad', ($ocLazyLoad: oc.ILazyLoad) => {
            return System.import(module + ".js").then((loadedFile: string) => {
                return $ocLazyLoad.load(loadedFile[key || 'default']);
            });
        }];
    }
    static registerLazyModule($stateProvider: angular.ui.IStateProvider, name: string, controllerName: string, key? : string): angular.ui.IStateProvider {
        let state = "/" + name;
        let view = name + "/view.tpl.html";
        let moduleFile = name + "/" + LazySystemService.capitalize(name) + "Module.js";

        return $stateProvider.state(state, {
            url: state,
            templateUrl: view,
            controllerAs: "vm",
            resolve: {
                loadAsync: ['$ocLazyLoad', ($ocLazyLoad: oc.ILazyLoad) => {
                    return System.import(moduleFile).then((loadedFile: string) => {
                        return $ocLazyLoad.load(loadedFile[key || 'default']);
                    });
                }]
            },
            controller: controllerName
        });
    }
    static capitalize(what : string) : string {
      if (!!what) {
        return what.charAt(0).toUpperCase() + (what.length > 1 ? what.slice(1) : "");
      } else {
        return what;
      }
    }
}
