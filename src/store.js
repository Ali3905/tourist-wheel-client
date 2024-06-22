// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer/reducer';

// Create the Redux store
const store = configureStore({
  reducer: persistReducer(
    {
      key: 'root',
      storage,
    },
    rootReducer
  ),
});

export const persistor = persistStore(store);

export default store;
