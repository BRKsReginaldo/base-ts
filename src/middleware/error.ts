import {Context} from "koa";
import {logger} from "../lib/logger";
import {MiddlewareFactory, NextMiddleware} from "../../types";

export default (): MiddlewareFactory => async (ctx: Context, next: NextMiddleware): Promise<void> => {
    try {
        await next()
    } catch (e) {
        logger.debug(e);
        ctx.status = e.status || e.statusCode || 500;
        ctx.body = {
            error: e.message,
            data: e.data,
            success: false
        };
        ctx.app.emit('error', e, ctx)
    }
}
