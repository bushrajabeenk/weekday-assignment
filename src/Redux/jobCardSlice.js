import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllJobs = createAsyncThunk(
  "getAllJobs",
  async (args, { rejectWithValue }) => {
    try {
      const body = JSON.stringify({
        limit: 10,
        offset: 0,
      });
      const response = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        body,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const result = response?.data;
      return result;
    } catch (err) {
      return rejectWithValue("Found an error", err);
    }
  }
);

export const jobCardSlice = createSlice({
  name: "jobCardSlice",
  initialState: {
    loading: false,
    error: false,
    jobsData: [],
  },
  reducers: {
    handleJobsChange: (state, action) => {
      state.jobsData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobsData = action?.payload?.jdList;
        state.error = true;
      })
      .addCase(getAllJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { handleJobsChange } = jobCardSlice.actions;
export default jobCardSlice.reducer;
