import { configureStore } from '@reduxjs/toolkit';
import postsReducers from './postsRedux';

const store = configureStore({
  reducer: {
    posts: postsReducers,
  },
});

export default store;
