import { createSlice } from "@reduxjs/toolkit";
import { addFollower, getAllFollowers } from "./api";
import { FollowerState } from "./type";

const initialState: FollowerState = {
  followers: [],
  follower: {
    uid: "",
    email: "",
    name: "",
    token: "",
    avt: "",
    authorID: "",
  },
  isLoading: false,
  error: null,
};

const followerSlice = createSlice({
  name: "follower",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET ALL FOLLOWER
    builder.addCase(getAllFollowers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllFollowers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.followers = action.payload;
    });
    builder.addCase(getAllFollowers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "Something went wrong.";
    });

    // ADD FOLLOWER
    builder.addCase(addFollower.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addFollower.fulfilled, (state, action) => {
      state.isLoading = false;
      state.follower = action.payload;
    });
    builder.addCase(addFollower.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "Something went wrong.";
    });
  },
});

export default followerSlice.reducer;
