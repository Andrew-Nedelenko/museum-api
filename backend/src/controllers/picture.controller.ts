import {Context } from 'koa'
import { curly } from 'node-libcurl'
import { env } from '../config/env'
import { checkDominant } from '../utils/checkDominant'

export const pictureController = async (ctx: Context): Promise<void> => {
  const { id } = ctx.params
  const { data: { objectID,
     primaryImage } } = await curly.get(`${env('MUSEUM_API_URL')}public/collection/v1/objects/${id || 12345}`)
     
  const color = await checkDominant(primaryImage).catch(() => undefined)
  ctx.body = {
    objectID, primaryImage, ...(color && color) 
  }
}