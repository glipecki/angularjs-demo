///ts:ref=angular-protractor
/// <reference path="../../../typings/angular-protractor/angular-protractor.d.ts"/> ///ts:ref:generated


describe('anything with real app', function() {

    beforeEach(() => {
        browser.get("/");
    });

    it('should find quick links section', function() {
        let qlinks = element(by.id('quick-links'));

        expect(qlinks.isPresent()).toBeTruthy();
        expect(qlinks.isDisplayed()).toBeTruthy();
  });
});
