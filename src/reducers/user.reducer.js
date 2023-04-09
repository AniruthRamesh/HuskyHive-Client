import { createSlice } from "@reduxjs/toolkit";
import {findUserThunk,createUser} from "../services/users/users.thunks.js"


const initialState = {
    users:[],
    loading:false,
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
              console.log(state.users)
        },
        [findUserThunk.rejected]:
           (state, action) => {
              state.loading = false
              state.error = action.error
        },
        [createUser.fulfilled]:
            (state, { payload }) => {
              state.loading = false
              state.users.push(payload)
          },
        },
        reducers:{

        }   
    }
)

export default usersSlice.reducer;