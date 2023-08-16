import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET ALL AUTHORS
const getAllAuths = createAsyncThunk("authors/getAllAuths", async () => {
  const response = await axios.get(`http://localhost:5000/authors/listAuth/`);
  if (response.status === 200) {
    return response.data;
  }
  throw new Error("Failed to get all authors");
});

export { getAllAuths };
