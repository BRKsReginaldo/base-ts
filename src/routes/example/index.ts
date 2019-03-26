import Router from 'koa-router'
import {List} from "../../http/controllers/example";

export default new Router()
    .get('/', List)
