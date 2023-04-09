import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gigs:[],
    loading:false
}

const gigsSlice = createSlice(
    {
        name:'gigs',
        initialState,
        extraReducers:{

        },
        reducers:{

        }   
    }
)

export default gigsSlice.reducer;