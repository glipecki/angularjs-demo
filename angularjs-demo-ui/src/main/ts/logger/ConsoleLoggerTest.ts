///ts:ref=jasmine
/// <reference path="../../../../typings/jasmine/jasmine.d.ts"/> ///ts:ref:generated

import ILogger from "./ILogger";
import ConsoleLogger from "./ConsoleLogger";

describe('console logger', function() {

    let logger : ILogger;
    let capturedMessage : string;

    beforeEach(() => {
        logger = new ConsoleLogger();
        window.console.info = (msg : string) => {
          capturedMessage = msg;
        }
    });

    it('should log anything', () => {
        logger.info("Hello");

        expect(capturedMessage).not.toBeUndefined();
        expect(capturedMessage).toEqual("Hello");
    });

    it('should evaluate parameter in message', () => {
        logger.info("Hello {}!", "Janek");

        expect(capturedMessage).not.toBeUndefined();
        expect(capturedMessage).toEqual("Hello Janek!");
    });

});
