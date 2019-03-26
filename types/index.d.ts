import {Context} from "koa";

export type NextMiddleware = () => Promise<void>
export type MiddlewareFactory = (ctx: Context, next: NextMiddleware) => Promise<void>
