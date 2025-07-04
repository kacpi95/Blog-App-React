import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState.posts,
  reducers: {},
});

export const getAllPosts = (state) => {
  return state.posts;
};

export default postsSlice.reducer;
