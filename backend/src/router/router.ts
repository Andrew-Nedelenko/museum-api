import Router  from 'koa-router'
import { pictureController } from '../controllers/picture.controller'

export const router = new Router({ prefix: '/api/v1'})

router.get('/pic/:id/:format?', pictureController)
