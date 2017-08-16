import { Logger } from './logger';

const logger = new Logger();

logger.log('Hi there!');

const logggerInCtx = Logger.getInContext('My Context');

logggerInCtx.log('Also hello!');
