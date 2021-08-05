import {Context } from 'koa'

export const rootController = async (ctx: Context): Promise<void> => {
  ctx.body = { msg: 'it works'}
}