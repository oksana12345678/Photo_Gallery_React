import { createSlice } from "@reduxjs/toolkit";
import { getAllSchedules } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const scheduleSlice = createSlice({
  name: "booking",
  initialState: {
    schedule: {
      date: null,
      time: [],
    },
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSchedules.pending, handlePending)
      .addCase(getAllSchedules.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.book = action.payload.data;
      })
      .addCase(getAllSchedules.rejected, handleRejected);
  },
});
export const scheduleReducer = scheduleSlice.reducer;
