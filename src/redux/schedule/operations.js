import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../service/apiErrorHandler";
import axios from "axios";

export const getAllSchedules = createAsyncThunk(
  "booking/get",
  async (__, thunkAPI) => {
    try {
      const response = await axios.get(`/schedule`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error));
    }
  }
);
