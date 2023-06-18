import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Blog } from "../../data/model/blogModel";
//import { MOCK_BLOG } from "../../data/mockData";

interface BlogState {
  blogs: Blog[];
  isLoading: boolean;
  error: string | null;
}
const initialState: BlogState = {
  blogs: [],
  isLoading: false,
  error: null,
};
const getBlogs = createAsyncThunk("blog/getBlogs", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await response.json();
  return blogs;
});
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
  },
});
export { getBlogs };
export default blogSlice.reducer;
