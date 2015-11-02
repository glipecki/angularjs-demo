///ts:ref=jasmine
/// <reference path="../../../../typings/jasmine/jasmine.d.ts"/> ///ts:ref:generated

import "angular";
import "angular-mocks";
import app from "../app";
import DemoService from "./DemoService";

describe("Test", () => {

    beforeEach(angular.mock.module(app.name));

    it("should load angular service", angular.mock.inject([DemoService.NAME, (demoService : DemoService) => {
        expect(demoService).not.toBeUndefined();
        expect(demoService.getHello("Janek")).not.toBeUndefined();
    }]));

});
