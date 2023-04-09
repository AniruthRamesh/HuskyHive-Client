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
  

  export const createUser = createAsyncThunk(
    'user/createUser',
    async (user) => {
      const newUser = await service.createUser(user)
      console.log(newUser)
      return newUser
  })
  
 

