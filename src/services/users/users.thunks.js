import {createAsyncThunk}
  from "@reduxjs/toolkit"
import * as service
  from "./users.service.js"

export const findUserThunk = createAsyncThunk(
  'user/findUser', async (uid) =>{
    const response = await service.findUser(uid)
    return response;
}
)
  

export const updateUserThunk = createAsyncThunk(
  'user/updateUser', async ({data}) =>{
    const response = await service.updateUser({data})
    return response;
}
)
  
 

