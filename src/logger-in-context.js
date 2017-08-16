import { Logger } from './logger';

export class LoggerInContext extends Logger {
  constructor(context) {
    super();
    this._context = context;
  }

  log(...msg) {
    supre.msg(this.context, ...msg);
  }
}
