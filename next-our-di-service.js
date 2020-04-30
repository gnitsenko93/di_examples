'use strict';

// module
class Logger {

    constructor() {

    }

    log(msg) {
        console.log(msg);
    }
}

// module
class Service {

    constructor(logger) {
        this._logger = logger;
    }

    do() {
        this._logger.log('I am a service with humane DI.');
    }
}

// module
class Controller {

    constructor(service) {
        this._service = service;
    }

    handle() {
        this._service.do();
    } 
}

// module with composition root
const logger = new Logger();
const service = new Service(logger);
const controller = new Controller(service);

const ApplicationData = {
    logger, service, controller
};

// module with application
class Application {

    constructor(dependencies) {
        const {
            logger, service, controller
        } = dependencies;

        this._logger = logger;
        this._service = service;
        this._controller = controller;
    }

    start() {
        this._interval = setInterval(() => {
            this._controller.handle();
        }, 1000)

        setTimeout(this.stop.bind(this), 10000);
    }

    stop() {
        clearInterval(this._interval);
    }
}

const app = new Application(ApplicationData);

app.start();
