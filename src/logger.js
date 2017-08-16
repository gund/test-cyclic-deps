import { LoggerInContext } from './logger-in-context';

export class Logger {
  static getInContext(context) {
    return new LoggerInContext(context);
  }

  log(...msg) {
    console.log(...msg);
  }
}
