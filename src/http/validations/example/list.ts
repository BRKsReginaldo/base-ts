import {Context} from 'koa'
import {hardValidate} from "../../../lib/validation";

const rules = {
    name: 'required|string'
}

export const validateList = (ctx: Context) => {
    return hardValidate(ctx.query, rules)
}
