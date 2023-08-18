import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, } from "./carsSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';

  
  const carsPersistConfig = {
    key: 'cars',
    storage,
    whitelist: [
        'favorite',
        ]
  }
  
  export const store = configureStore({
    reducer: {
      cars: persistReducer (carsPersistConfig, carsReducer),
  },
  
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);