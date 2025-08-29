import { configureStore } from "@reduxjs/toolkit";
import { bookingReducer } from "./booking/slice.js";
import { scheduleReducer } from "./schedule/slice.js";

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    schedule: scheduleReducer,
  },
});
