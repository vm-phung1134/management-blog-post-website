import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IFollowing } from "../../../interface/following";
import { user } from "../blog/type";

const getAllFollowings = createAsyncThunk(
  "following/getAllFollowing",
  async (id: string) => {
    const response = await axios.get(
      `http://localhost:5000/following/list/${id}`
    );
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Failed to get all following");
  }
);

const checkFollowStatusUser = createAsyncThunk(
  "following/checkFollowStatusUser",
  async (uid: string) => {
    const response = await axios.get(
      `http://localhost:5000/following/checkList/${uid}`
    );
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Failed to check follow status");
  }
);

const addFollowing = createAsyncThunk(
  "following/addFollowing",
  async (postData: IFollowing) => {
    const response = await axios.post(
      "http://localhost:5000/following/list/",
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
    throw new Error("Failed to add following");
  }
);

const unFollowing = createAsyncThunk(
  "following/unFollowing",
  async (uid: string) => {
    const response = await axios.delete(`http://localhost:5000/following/list/${uid}`);
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Failed to un following");
  }
);

export { getAllFollowings, addFollowing, checkFollowStatusUser, unFollowing };
