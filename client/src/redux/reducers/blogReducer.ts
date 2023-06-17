import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Blog } from "../../data/model/blogModel";
interface BlogState {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
}
const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null,
};
export const getBlogs = createAsyncThunk("blog/getBlogs", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/blogs");
  const blogs = await response.json();
  return blogs;
});
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    });
    builder.addCase(getBlogs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Something went wrong.";
    });
  },
});
export default blogSlice.reducer;