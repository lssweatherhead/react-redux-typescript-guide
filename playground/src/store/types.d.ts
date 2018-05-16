import rootReducer from './root-reducer';

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>;
}

export type StateType<ReducerOrMap> = ReducerOrMap extends (
  ...args: any[]
) => any
  ? ReturnType<ReducerOrMap>
  : ReducerOrMap extends object
    ? { [K in keyof ReducerOrMap]: StateType<ReducerOrMap[K]> }
    : never;

import { RouterAction, LocationChangeAction } from 'react-router-redux';
import { CountersAction } from '../features/counters';

type ReactRouterAction = RouterAction | LocationChangeAction;
export type RootAction = ReactRouterAction | CountersAction;
