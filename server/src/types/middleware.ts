import { MiddlewareFn } from 'type-graphql';

import { Context } from './context';

export type Middleware = MiddlewareFn<Context>;
