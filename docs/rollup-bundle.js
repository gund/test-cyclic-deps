(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

class LoggerInContext extends Logger {
  constructor(context) {
    super();
    this._context = context;
  }

  log(...msg) {
    supre.msg(this.context, ...msg);
  }
}

class Logger {
  static getInContext(context) {
    return new LoggerInContext(context);
  }

  log(...msg) {
    console.log(...msg);
  }
}

const logger = new Logger();

logger.log('Hi there!');

const logggerInCtx = Logger.getInContext('My Context');

logggerInCtx.log('Also hello!');

})));
