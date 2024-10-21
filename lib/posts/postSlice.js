import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getDataPost: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { getDataPost, createPost, updatePost } = postSlice.actions;

export const postsReducer = postSlice.reducer;
