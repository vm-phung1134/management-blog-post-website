import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET ALL BLOGS
const getAllNotifications = createAsyncThunk(
  "notification/getAllNotifications",
  async (id: string) => {
    const response = await axios.get(
      `http://localhost:5000/notification/${id}`
    );
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Failed to get all notifications");
  }
);

export { getAllNotifications };
