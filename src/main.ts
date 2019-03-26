import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import query from "./middleware/query";
import error from "./middleware/error";
import i18n from "./middleware/i18n";
import {logger} from "./lib/logger";
import exampleRouter from './routes/example'


const app = new Koa()
    .use(bodyParser())
    .use(error())
    .use(i18n())
    .use(query())
    .use(exampleRouter.routes())
    .on('error', (err): void => {
        logger[err.level || 'debug']({
            message: err.message
        })
    });


module.exports = app;
