import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { IBlog } from "../../data/Interface/interface_blog";
import { IUser } from "../../data/Interface/interface_user";
//import { MOCK_BLOG } from "../../data/mockData";

interface BlogState {
  blogs: IBlog[];
  blog: IBlog;
  isLoading: boolean;
  error: string | null;
}
const user: IUser = {
  email: Cookies.get("email"),
  name: Cookies.get("userName"),
  token: Cookies.get("token"),
  avt: Cookies.get("profilePic"),
};

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
export const getBlogs = createAsyncThunk("blog/getBlogs", async () => {
  const response = await axios.get("http://localhost:5000/blogs/");
  if (response.status === 200) {
    return response.data;
  }
  throw new Error("Failed to create blog post");
});
export const createBlog = createAsyncThunk(
  "blog/createBlog",
  async (postData: IBlog) => {
    const response = await axios.post(
      "http://localhost:5000/blogs/",
      postData,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Failed to create blog post");
  }
);

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
