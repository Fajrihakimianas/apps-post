import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './posts/postSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      posts: postsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export default makeStore;
