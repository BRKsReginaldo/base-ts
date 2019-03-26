import winston from 'winston'
import path from 'path'
import {ConsoleTransportInstance, FileTransportInstance} from "winston/lib/winston/transports";

const LEVEL = Symbol.for('level');

function filterOnly(level: string) {
    return winston.format((info) => {
        // @ts-ignore
        return info[LEVEL] === level ? info : false
    })();
}

const levels = {
    wtf: 0,
    error: 1,
    warn: 2,
    info: 3,
    verbose: 4,
    debug: 5,
    silly: 6
};

const consoleLogger = (level: string) => new winston.transports.Console({
    level,
    silent: process.env.NODE_ENV === 'production',
    format: filterOnly(level)
});

const fileLogger = (level: string, filename: string) => new winston.transports.File({
    filename: path.resolve(__dirname, '../../logs', `${filename}.log`),
    level,
    format: filterOnly(level)
});

export const logger = winston.createLogger({
    levels,
    transports: [
        ...Object.keys(levels).map((level: string): ConsoleTransportInstance|FileTransportInstance => {
            if (level !== 'wtf' && level !== 'error') return consoleLogger(level);
            return fileLogger(level, level === 'wtf' ? 'error.wtf' : 'error')
        })
    ]
});
