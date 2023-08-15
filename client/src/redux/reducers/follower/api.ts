import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IFollower } from "../../../interface/follower";
import { user } from "../blog/type";

const getAllFollowers = createAsyncThunk(
  "follower/getAllFollower",
  async (id: string) => {
    const response = await axios.get(
      `http://localhost:5000/follower/list/${id}`
    );
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Failed to get all follower");
  }
);

const addFollower = createAsyncThunk(
  "follower/addFollower",
  async (postData: IFollower) => {
    const response = await axios.post(
      "http://localhost:5000/follower/list/",
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
    throw new Error("Failed to add follower");
  }
);

export { getAllFollowers, addFollower };
