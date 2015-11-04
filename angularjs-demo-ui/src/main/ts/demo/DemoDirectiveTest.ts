///ts:ref=jasmine
/// <reference path="../../../../typings/jasmine/jasmine.d.ts"/> ///ts:ref:generated

import "angular";
import "angular-mocks";
import DemoModule from "./DemoModule";
import DemoDirective from "./DemoDirective";
import DemoDirectiveController from "./DemoDirectiveController";

describe("DemoDirective", () => {

    let $compile: angular.ICompileService;
    let $rootScope: angular.IRootScopeService;
    let demoControllerMock : any;

    beforeEach(angular.mock.module(DemoModule.name));
    beforeEach(angular.mock.module(["$controllerProvider", function($controllerProvider : angular.IControllerProvider) {
        $controllerProvider.register(DemoDirectiveController.NAME, () => {
            return demoControllerMock;
        });
    }]));

    beforeEach(inject(["$compile", "$rootScope", ($compile_: angular.ICompileService, $rootScope_: angular.IRootScopeService) => {
        $compile = $compile_;
        $rootScope = $rootScope_;
        demoControllerMock = {};
    }]));

    it("should evaluate directive with message from controller", angular.mock.inject([() => {
        let expectedMessage = "Hello Krzyś!";
        demoControllerMock.view = {
            message: expectedMessage
        };

        let element = $compile("<demo-message-box user=\"testUser\"></demo-message-box>")($rootScope);
        $rootScope.$digest();

        expect(element.html()).toContain(expectedMessage);
    }]));

    it("should bind user argument to controller", angular.mock.inject([() => {
        let expectedName = "Grześ";
        (<any> $rootScope).testUser = expectedName;

        let element = $compile("<demo-message-box user=\"testUser\"></demo-message-box>")($rootScope);
        $rootScope.$digest();

        expect(demoControllerMock.user).toEqual(expectedName);
    }]));

    it("should do something", () => {
        expect(true).toBeTruthy();
    });

});
