import { createSlice } from "@reduxjs/toolkit";
import { getAllAuths } from "./api";
import { AuthState } from "./type";

const initialState: AuthState = {
  auths: [],
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET ALL AUTHORS
    builder.addCase(getAllAuths.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllAuths.fulfilled, (state, action) => {
      state.isLoading = false;
      state.auths = action.payload;
    });
    builder.addCase(getAllAuths.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "Something went wrong.";
    });
  },
});

export default authSlice.reducer;
