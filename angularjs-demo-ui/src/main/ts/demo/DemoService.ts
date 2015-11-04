import "angular";

export default class DemoService {
    static NAME : string = "DemoService";

    constructor(private $http : angular.IHttpService, private $q : angular.IQService) {
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
