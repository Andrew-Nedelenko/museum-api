import Router  from 'koa-router'
import { rootController } from '../controllers/root.controller'

export const router = new Router({ prefix: '/api/v1'})

router.get('/', rootController)
