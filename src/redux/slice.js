import { createSlice } from "@reduxjs/toolkit";
import { postBooking } from "./operations";

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
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postBooking.pending, handlePending)
      .addCase(postBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.book = action.payload;
      });
    builder.addCase(postBooking.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export const bookingReducer = bookingSlice.reducer;
