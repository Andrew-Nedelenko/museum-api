import Koa from 'koa'
import helmet from 'koa-helmet'
import { router } from './router/router';
import { logger } from './config/Logger';


class App {
  private readonly app: Koa = new Koa();

  constructor() {
    if (process.env.NODE_ENV !== 'production') {
      logger(this.app);
    }
    this.app.proxy = true;
    this.app
      .use(helmet())
      .use(router.routes());
  }

  getApp(): Koa {
    return this.app;
  }
}

export const server = (): Koa => new App().getApp();
