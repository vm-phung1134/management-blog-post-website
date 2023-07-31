import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBlog } from "../../../interface/blog";
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

// GET ALL BLOGS AUTHOR
const getAllBlogsAuthor = createAsyncThunk(
  "blog/getAllBlogsAuthor",
  async (authorId: string | undefined) => {
    const response = await axios.get(
      `http://localhost:5000/blogs/author/${authorId}`
    );
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Failed to create blog post");
  }
);

// GET ONE BLOG

const getBlog = createAsyncThunk("blog/getBlog", async (blogId: string) => {
  const response = await axios.get(`http://localhost:5000/blogs/${blogId}`);
  if (response.status === 200) {
    return response.data;
  }
  throw new Error("Failed to create blog post");
});

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

const updateBlog = createAsyncThunk(
  "blog/updateBlog",
  async (postData: IBlog) => {
    console.log(postData.id)
    const response = await axios.put(
      `http://localhost:5000/blogs/${postData.id}`,
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
    throw new Error("Failed to update blog post");
  }
);

export { getBlogs, createBlog, getBlog, getAllBlogsAuthor, updateBlog };
