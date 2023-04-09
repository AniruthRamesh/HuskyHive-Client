import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviews:[],
    loading:false
}

const reviewsSlice = createSlice(
    {
        name:'reviews',
        initialState,
        extraReducers:{

        },
        reducers:{

        }   
    }
)

export default reviewsSlice.reducer;