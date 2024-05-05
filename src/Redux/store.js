import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    jobCardSlice: jobCardSlice,
  },
});
