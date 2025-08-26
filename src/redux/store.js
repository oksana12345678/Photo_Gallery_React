import { configureStore } from "@reduxjs/toolkit";
import { bookingReducer } from "./slice.js";

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});
