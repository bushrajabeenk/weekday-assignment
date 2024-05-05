import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllJobs = createAsyncThunk(
  "getAllJobs",
  async (args, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "",
        {
          club_id: 1,
          user_id: 2,
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: "",
          },
        }
      );
      const result = response;
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
        state.jobsData = action.payload.data;
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
