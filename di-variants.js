'use strict';

// constructor injection
class ConstructorInjection {

    constructor(dependency) {
        this._dependency = dependency;
    }
}

// setter injection
class SetterInjection {

    setDependency(dependency) {
        this._dependency = dependency;
    }
}

const setterInj = new SetterInjection();
setterInj.setDependency({});

// interface injection
class Interface {

    injectDependency(dependency) {
        throw new Error('injectDependency is not implemented')
    }
}

class InterfaceInjection extends Interface {
    injectDependency(dependency) {
        this._dependency = dependency;
    }
}

// service locator