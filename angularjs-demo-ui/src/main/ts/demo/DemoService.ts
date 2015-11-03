import "angular";

export default class DemoService {
    static NAME : string = "DemoService";
    private $http : angular.IHttpService;
    constructor($http : angular.IHttpService) {
        this.$http = $http;
    }
    getHello(name : string) : angular.IHttpPromise<string> {
        return this.$http.post("http://localhost:9000/api/v1/hello", name);
    }
}
