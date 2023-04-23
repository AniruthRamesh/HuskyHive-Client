import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gigs: [],
  loading: false
};

const gigsSlice = createSlice({
  name: "gigs",
  initialState,
  reducers: {
    setInitialGigs: (state) => {
      state.gigs = [];
    }
  }
});

export const { setInitialGigs } = gigsSlice.actions;
export default gigsSlice.reducer;