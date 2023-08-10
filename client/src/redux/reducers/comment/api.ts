import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICommentItem } from "../../../interface/comment";
import { user } from "./type";

// GET ALL BLOGS
const getAllComments = createAsyncThunk(
  "comment/getAllComments",
  async (id: string) => {
    const response = await axios.get(
      `http://localhost:5000/blog/comments/${id}`
    );
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Failed to get all comments of blog post");
  }
);

const createComment = createAsyncThunk(
  "comment/createComment",
  async (postData: ICommentItem) => {
    const response = await axios.post(
      "http://localhost:5000/blog/comments/",
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
    throw new Error("Failed to create comment post");
  }
);

export { getAllComments, createComment };
