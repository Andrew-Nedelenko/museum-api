import { env } from './config/env';
import { server } from './App';

server().listen(env('PORT'), () => console
  .log(`listen on ${env('PORT')}`));
