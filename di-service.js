'use strict';

/** @typedef {{log: Function}} Logger */

class Service {

    /**
     * @param {Logger} logger 
     * @constructor
     */
    constructor(logger) {
        this._logger = logger;
    }

    do() {
        this._logger.log('I am doing with DI.');
    }
}

const logger = { log: console.log };

const service = new Service(logger);

service.do();
