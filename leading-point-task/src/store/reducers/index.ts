import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { dashboardAPI } from '../api';
import utilReducer from './util';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const persistedUtilReducerReducer = persistReducer(persistConfig, utilReducer);

export const rootReducer = combineReducers({
    util: persistedUtilReducerReducer,
    [dashboardAPI.reducerPath]: dashboardAPI.reducer,
});
