///ts:ref=jasmine
/// <reference path="../../../../typings/jasmine/jasmine.d.ts"/> ///ts:ref:generated

import "angular";
import "angular-mocks";
import DemoModule from "./DemoModule";
import DemoDirective from "./DemoDirective";

describe("DemoDirective", () => {

    let $compile: angular.ICompileService;
    let $rootScope: angular.IRootScopeService;

    beforeEach(angular.mock.module(DemoModule.name));

    beforeEach(inject(["$compile", "$rootScope", ($compile_: angular.ICompileService, $rootScope_: angular.IRootScopeService) => {
        $compile = $compile_;
        $rootScope = $rootScope_;
    }]));

    it("should evaluate directive", angular.mock.inject([() => {
        let element = $compile("<demo-message-box user=\"testUser\"></demo-message-box>")($rootScope);

        (<any>$rootScope).testUser = {
            username: "Grześ"
        };
        $rootScope.$digest();

        expect(element.html()).toContain("Message: \"Hello Grześ!\"");
    }]));

    it("should do something", () => {
        expect(true).toBeTruthy();
    });

});
