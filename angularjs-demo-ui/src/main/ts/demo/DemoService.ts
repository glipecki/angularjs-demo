import "angular";

export default class DemoService {
    static NAME : string = "DemoService";

    private $http : angular.IHttpService;
    private $q : angular.IQService;

    constructor($http : angular.IHttpService, $q : angular.IQService) {
        this.$http = $http;
        this.$q = $q;
    }

    getHello(name : string) : angular.IPromise<string> {
        let defer = this.$q.defer<string>();
        this.$http.post("/api/v1/hello", name, {
            timeout: 200
        }).success((data : string) => {
            defer.resolve(data);
        }).error(() => {
            defer.reject();
        });
        return defer.promise;
    }

}
