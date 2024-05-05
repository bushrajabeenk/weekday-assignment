import { configureStore } from "@reduxjs/toolkit";
import jobCardSlice from "./jobCardSlice";

export const store = configureStore({
  reducer: {
    jobCardSlice: jobCardSlice,
  },
});
