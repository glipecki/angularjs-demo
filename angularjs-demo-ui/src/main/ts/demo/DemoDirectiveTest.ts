///ts:ref=jasmine
/// <reference path="../../../../typings/jasmine/jasmine.d.ts"/> ///ts:ref:generated

import "angular";
import "angular-mocks";
import DemoModule from "./DemoModule";
import DemoDirective from "./DemoDirective";

describe("DemoDirective", () => {

    let $compile : angular.ICompileService;
    let $rootScope : angular.IRootScopeService;

    beforeEach(angular.mock.module(DemoModule.name));

    beforeEach(inject(["$compile", "$rootScope", ($compile : angular.ICompileService, $rootScope : angular.IRootScopeService) => {
        this.$compile = $compile;
        this.$rootScope = $rootScope;
    }]));

    it("should evaluate directive", angular.mock.inject([() => {
        let element = this.$compile("<demo-message-box user=\"testUser\"></demo-message-box>")(this.$rootScope);

        (<any> this.$rootScope).testUser = {
            username: "Grześ"
        };
        this.$rootScope.$digest();

        expect(element.html()).toContain("Message: \"Hello Grześ!\"");
    }]));

});
