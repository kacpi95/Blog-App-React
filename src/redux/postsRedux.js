import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState.posts,
  reducers: {
    removePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
  },
});
export const { removePost } = postsSlice.actions;
export const getAllPosts = (state) => {
  return state.posts;
};
export const getPostsById = (state, id) =>
  state.posts.find((post) => post.id === id);
export default postsSlice.reducer;
