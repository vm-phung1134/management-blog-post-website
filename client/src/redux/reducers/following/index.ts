import { createSlice } from "@reduxjs/toolkit";
import { FollowingState } from "./type";
import {
  addFollowing,
  checkFollowStatusUser,
  getAllFollowings,
  unFollowing,
} from "./api";

const initialState: FollowingState = {
  followings: [],
  following: {
    uid: "",
    email: "",
    name: "",
    token: "",
    avt: "",
    authorID: "",
  },
  checkFollowing: false,
  isLoading: false,
  error: null,
};

const followingSlice = createSlice({
  name: "following",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET ALL FOLLOWING
    builder.addCase(getAllFollowings.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllFollowings.fulfilled, (state, action) => {
      state.isLoading = false;
      state.followings = action.payload;
    });
    builder.addCase(getAllFollowings.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "Something went wrong.";
    });

    // ADD FOLLOWING
    builder.addCase(addFollowing.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addFollowing.fulfilled, (state, action) => {
      state.isLoading = false;
      state.following = action.payload;
    });
    builder.addCase(addFollowing.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "Something went wrong.";
    });

    // CHECK FOLLOWING STATUS
    builder.addCase(checkFollowStatusUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(checkFollowStatusUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.checkFollowing = action.payload;
    });
    builder.addCase(checkFollowStatusUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "Something went wrong.";
    });

    // UNFOLLOWING
    builder.addCase(unFollowing.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(unFollowing.fulfilled, (state, action) => {
      state.isLoading = false;
      state.followings = action.payload;
    });
    builder.addCase(unFollowing.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "Something went wrong.";
    });
  },
});

export default followingSlice.reducer;
