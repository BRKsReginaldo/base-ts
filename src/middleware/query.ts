import {Context} from "koa";
import qs from 'qs'
import {MiddlewareFactory, NextMiddleware} from "../../types";

export default (): MiddlewareFactory => async (ctx: Context, next: NextMiddleware): Promise<void> => {
    if (ctx.request.query && typeof ctx.request.query === 'object') {
        Object.defineProperty(ctx.request, 'query', {
            value: {...qs.parse(ctx.request.querystring)},
            writable: false
        });

        Object.defineProperty(ctx, 'query', {
            value: {...qs.parse(ctx.request.querystring)},
            writable: false
        })
    }

    await next()
}
