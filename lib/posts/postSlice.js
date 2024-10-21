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
    fetchPosts: (state) => {
      state.loading = true;
    },
    addPosts: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
  },
});

export const { fetchPosts, addPosts, fetchPostsFailure } = postSlice.actions;

export const postsReducer = postSlice.reducer;
