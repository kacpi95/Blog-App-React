import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import shortid from 'shortid';

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState.posts,
  reducers: {
    removePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
    addPost: (state, action) => {
      return [...state, { id: shortid(), ...action.payload }];
    },
    editPost: (state, action) => {
      return state.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );
    },
  },
});
export const { removePost, addPost, editPost } = postsSlice.actions;
export const getAllPosts = (state) => {
  return state.posts;
};
export const getPostsById = (state, id) =>
  state.posts.find((post) => post.id === id);
export default postsSlice.reducer;
