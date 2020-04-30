'use strict';

const Logger = require('./logger');

class Service {

    constructor() {
        this._logger = new Logger();
    }

    do() {
        this._logger.log('I am doing w/o DI.');
    }
}

const service = new Service();

service.do();

// change in Logger leads to change in Service
// hard to test