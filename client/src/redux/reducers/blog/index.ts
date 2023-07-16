import { createSlice } from "@reduxjs/toolkit";
import { BlogState, user } from "./type";
import { createBlog, getBlogs } from "./api";


const initialState: BlogState = {
  blogs: [],
  blog: {
    title: "",
    img: "",
    releaseDate: "",
    author: user,
    description: "",
    contents: [],
    tags: [],
    likes: 0,
    views: 0,
    comments: 0
  },
  isLoading: false,
  error: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET BLOGS
    builder.addCase(getBlogs.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload;
    });
    builder.addCase(getBlogs.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "Something went wrong.";
    });

    // CREATE BLOG
    builder.addCase(createBlog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blog = action.payload;
    });
    builder.addCase(createBlog.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "Something went wrong.";
    });
  },
});

export default blogSlice.reducer;