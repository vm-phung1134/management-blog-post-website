import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBlog } from "../../../Interface/blog";
import axios from "axios";
import { user } from "./type";

// GET ALL BLOGS
const getBlogs = createAsyncThunk("blog/getBlogs", async () => {
  const response = await axios.get("http://localhost:5000/blogs/");
  if (response.status === 200) {
    return response.data;
  }
  throw new Error("Failed to create blog post");
});

const getBlog = createAsyncThunk(
  "blog/getBlog",
  async (id: string) => {
    const response = await axios.get(`http://localhost:5000/blogs/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Failed to create blog post");
  }
);

// CREATE BLOG
const createBlog = createAsyncThunk(
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

export { getBlogs, createBlog, getBlog };
