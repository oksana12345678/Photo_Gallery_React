import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleError } from "./service/apiErrorHandler";

axios.defaults.baseURL = "https://photo-graphy-backend.onrender.com";
//http://localhost:3000

export const postBooking = createAsyncThunk(
  "booking/post",
  async ({ data }, thunkAPI) => {
    try {
      const response = await axios.post(`/booking`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error));
    }
  }
);
