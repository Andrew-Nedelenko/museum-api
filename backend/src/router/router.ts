import Router from 'koa-router';
import { RateLimit } from 'koa2-ratelimit';
import { pictureController } from '../controllers/picture.controller';

export const router = new Router({ prefix: '/api/v1' });

const limiter = RateLimit.middleware({
    interval: { sec: 1 },
    max: 80,
});

router.get('/pic/:id/:format?', limiter, pictureController);
