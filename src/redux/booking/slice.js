import { createSlice } from "@reduxjs/toolkit";
import { getAllBooking, getFreeBookingDate } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    book: {
      name: "",
      email: "",
      phone: "",
      date: null,
      time: null,
      location: "",
      message: "",
    },
    date: [],
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooking.pending, handlePending)
      .addCase(getAllBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.book = action.payload.data;
      })
      .addCase(getAllBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getFreeBookingDate.pending, handlePending)
      .addCase(getFreeBookingDate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.date = action.payload.data;
      })
      .addCase(getFreeBookingDate.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const bookingReducer = bookingSlice.reducer;
