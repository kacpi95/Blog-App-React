import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsRedux';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
