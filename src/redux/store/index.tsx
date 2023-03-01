// @ts-nocheck
import { RootState } from '@cTypes/states/root';
import { MMKV } from 'react-native-mmkv';
import { applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import errorReducer from '../reducers/error';
import userReducer from '../reducers/user';

export const MMKVStorage = new MMKV({
  id: 'mmkv.default',
  encryptionKey: '~lk*[2/+_21po(Palk?2@%',
});

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    MMKVStorage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key) => {
    const value = MMKVStorage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key) => {
    MMKVStorage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['auth', 'error', 'user'],
};

const authPersistConfig = {
  key: 'auth',
  storage: reduxStorage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  error: errorReducer,
  user: userReducer,
});

const middleware = applyMiddleware(thunk);
// const middleware = applyMiddleware(thunk, logger)
const enhancer = composeWithDevTools(middleware);
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedReducer, enhancers: enhancer });
// export const store = configureStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
