import { createSlice } from "@reduxjs/toolkit";
import {findUserThunk,updateUserThunk} from "../services/users/users.thunks.js"

const initialState = {
    users:[],
    loading:false,
    userUpdated:false
}

const usersSlice = createSlice(
    {
        name:'users',
        initialState,
        extraReducers:{
            [findUserThunk.pending]:
           (state) => {
              state.loading = true
              state.users = []
        },
        [findUserThunk.fulfilled]:
           (state, { payload }) => {
              state.loading = false
              state.users = payload
              
        },
        [findUserThunk.rejected]:
           (state, action) => {
              state.loading = false
              state.error = action.error
        },
        [updateUserThunk.fulfilled]:
           (state, { payload }) => {
              state.userUpdated = true
        },
        

        },
        reducers:{

        }   
    }
)

export default usersSlice.reducer;