import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleError } from "../service/apiErrorHandler";

//http://localhost:3000
axios.defaults.baseURL = "https://photo-graphy-backend.onrender.com";
//https://photo-graphy-backend.onrender.com
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

export const getAllBooking = createAsyncThunk(
  "booking/get",
  async (__, thunkAPI) => {
    try {
      const response = await axios.get(`/booking`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error));
    }
  }
);

export const getFreeBookingDate = createAsyncThunk(
  "booking/getFreeDate",
  async (__, thunkAPI) => {
    try {
      const response = await axios.get(`/booking/calendar`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error));
    }
  }
);
