import {Context} from "koa";

export type NextMiddleware = () => Promise<void>
export type MiddlewareFactory = (ctx: Context, next: NextMiddleware) => Promise<void>
export interface IValidationError {
    message: string
    field: string
    validation: string
}
