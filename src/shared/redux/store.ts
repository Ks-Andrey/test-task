// store.ts
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './root'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/es/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['inventoryReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
