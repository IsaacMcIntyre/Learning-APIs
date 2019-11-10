import winston from 'winston';
import config from '../config';

const logger = winston.createLogger({
	level: config.LOG_LEVEL || 'verbose',
	transports: [
		new winston.transports.Console()
	]
});

export default logger;
