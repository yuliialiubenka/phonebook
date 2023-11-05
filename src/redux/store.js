import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { contactsReducer } from './contacts/contacts';
import { authReducer } from 'redux/auth/slice';
import { filterReducer } from './filter/filter';
import storage from 'redux-persist/lib/storage';

// Configuration for redux-persist, specify the key, storage and fields to be saved.
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// Create a Redux store using configureStore
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  // Apply middleware using getDefaultMiddleware
  middleware: [ ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  devTools: process.env.NODE_ENV === 'development',
});

// Creating a persistor to save the Redux state in local storage.
export const persistor = persistStore(store);