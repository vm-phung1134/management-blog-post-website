import { createSlice } from "@reduxjs/toolkit";
import { BlogState, user } from "./type";
import {
  createBlog,
  getBlogs,
  getBlog,
  getAllBlogsAuthor,
  updateBlog,
  deleteBlog,
} from "./api";

const initialState: BlogState = {
  blogs: [],
  blogAuthors: [],
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
    comments: [],
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
    // GET ALL BLOGS AUTHOR
    builder.addCase(getAllBlogsAuthor.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllBlogsAuthor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blogAuthors = action.payload;
    });
    builder.addCase(getAllBlogsAuthor.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "Something went wrong.";
    });

    // GET BLOG
    builder.addCase(getBlog.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blog = action.payload;
    });
    builder.addCase(getBlog.rejected, (state, action) => {
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

    // UPDATE BLOG
    builder.addCase(updateBlog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blog = action.payload;
    });
    builder.addCase(updateBlog.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "Something went wrong.";
    });

    // DELETE BLOG
    builder.addCase(deleteBlog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blogAuthors = action.payload;
    });
    builder.addCase(deleteBlog.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "Something went wrong.";
    });
  },
});

export default blogSlice.reducer;
