import { configureStore, Tuple } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistCombineReducers,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import rootSaga from '~/sagas';

import { RootState } from '~/types';

import dynamicMiddlewares from './dynamic-middlewares';
import middlewares, { sagaMiddleware } from './middlewares';
import alerts, { alertsState } from './slices/alerts';
import app, { appState } from './slices/app';
import message, { messageState } from './slices/message';
import user, { userState } from './slices/user';
import signup, {signupState} from './slices/signup';

const getDefaultMiddlewareOptions = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
  // thunk: false,
};

export const initialState = {
  alerts: alertsState,
  app: appState,
  message: messageState,
  user: userState,
  signup: signupState,
};

export const reducers = {
  alerts,
  app,
  message,
  user,
  signup
};

const rootReducer = persistCombineReducers<RootState>(
  {
    key: 'rrsb',
    stateReconciler: autoMergeLevel2,
    storage,
    blacklist: ['alerts'],
    timeout: 0,
  },
  reducers,
);

export const configStore = (preloadedState: any = {}) => {
  const enhancedStore = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware => {
      return new Tuple(
        ...getDefaultMiddleware(getDefaultMiddlewareOptions),
        ...middlewares,
        dynamicMiddlewares,
      );
    },
  });

  sagaMiddleware.run(rootSaga);

  return enhancedStore;
};

export const store = configStore();
export const persistor = persistStore(store);
