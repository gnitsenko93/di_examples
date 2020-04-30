'use strict';

class Service {

    constructor(container) {
        this._container = container;
    }

    getDependency(dependency) {
        return this._container[dependency];
    }
}

class DoService extends Service {

    do() {
        const logger = this.getDependency('Logger');

        logger.log('I am doing shitstorm DI.');
    }
}

const container = {
    Logger: { log: console.log }
};

const service = new DoService(container);

service.do();

// Classic Service Locator pattern
// Hard to use (or test) because of no explicit depenpencies