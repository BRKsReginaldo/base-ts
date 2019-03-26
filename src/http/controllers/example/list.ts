import {validateList} from "../../validations/example/list";

export const List = async (ctx) => {
    const {data} = await validateList(ctx)
    ctx.body = data
    ctx.status = 200
}
