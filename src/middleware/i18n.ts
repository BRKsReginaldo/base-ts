import {Context} from "koa";
import {getI18n} from "../lib/i18n";
import {MiddlewareFactory, NextMiddleware} from "../../types";

export default (): MiddlewareFactory => async (ctx: Context, next: NextMiddleware): Promise<void> => {
    let i18nI = getI18n();

    i18nI.setLocale({en: 'en', pt_br: 'pt_br'}[ctx.query.lang || 'en'] || 'en');

    Object.assign(ctx.app.context, i18nI);

    await next()
}
