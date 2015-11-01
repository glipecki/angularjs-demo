///ts:ref=jasmine
/// <reference path="../../../../typings/jasmine/jasmine.d.ts"/> ///ts:ref:generated
///ts:ref=angular-mocks
/// <reference path="../../../../typings/angularjs/angular-mocks.d.ts"/> ///ts:ref:generated

import DemoService from "./DemoService";

console.info('angular:');
console.info(angular);

describe(DemoService.NAME + '_unit', function() {
  service : DemoService;

  beforeEach(() => {
    this.service = new DemoService();
  });

  it("should return anything for hello", () => {
    expect(this.service.getHello()).toBeDefined();

    expect(angular).not.toBeUndefined();
    expect(angular.mock).not.toBeUndefined();
  });

});

// describe(DemoService.NAME + '_it', function() {
//
//   beforeEach(angular.mock.module('app'));
//
// });
