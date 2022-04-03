import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../redux/images/images-reducers';

export const store = configureStore({
  reducer: {
    images: imageReducer,
  },

  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
