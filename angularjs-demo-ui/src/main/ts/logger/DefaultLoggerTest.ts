///ts:ref=jasmine
/// <reference path="../../../../typings/jasmine/jasmine.d.ts"/> ///ts:ref:generated

import ILogger from "./ILogger";
import DefaultLogger from "./DefaultLogger";

describe('console logger', function() {

    let logger: ILogger;
    let appenderMock = {
        info(message: string) {
            this.lastMessage = message;
        },
        lastMessage: ""
    };

    beforeEach(() => {
        logger = new DefaultLogger(appenderMock);
    });

    it('should log anything', () => {
        logger.info("Hello");

        expect(appenderMock.lastMessage).not.toBeUndefined();
        expect(appenderMock.lastMessage).toEqual("Hello");
    });

    it('should evaluate parameter in message', () => {
        logger.info("Hello {}!", "Janek");

        expect(appenderMock.lastMessage).not.toBeUndefined();
        expect(appenderMock.lastMessage).toEqual("Hello Janek!");
    });

});
