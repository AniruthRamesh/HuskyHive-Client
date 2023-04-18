import { createSlice } from "@reduxjs/toolkit";
import {
 loginThunk, logoutThunk, registerThunk,profileThunk
} from "../services/auth/auth-thunk.js";

const authSlice = createSlice({
    name: "auth",
    initialState: { currentUser: null,user:null },
    reducers: {},
    extraReducers: {
      [loginThunk.fulfilled]: (state, { payload }) => {
        state.currentUser = payload;
      },
      [logoutThunk.fulfilled]: (state, { payload }) => {
        state.currentUser = null;
        state.user = null;
      },
      [profileThunk.fulfilled]: (state, { payload }) => {
        state.user = payload;
      },
    },
   });

export default authSlice.reducer;
   