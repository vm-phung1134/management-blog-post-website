import { createSlice } from "@reduxjs/toolkit";
import { NotificationState } from "./type";
import { getAllNotifications } from "./api";

const initialState: NotificationState = {
  notifications: [],
  isLoading: false,
  error: null,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET ALL COMMENTS
    builder.addCase(getAllNotifications.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllNotifications.fulfilled, (state, action) => {
      state.isLoading = false;
      state.notifications = action.payload;
    });
    builder.addCase(getAllNotifications.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "Something went wrong.";
    });
  },
});

export default notificationSlice.reducer;
