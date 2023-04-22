import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service.js";

export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
      
      const user = await authService.login(credentials);
      console.log(user)
      return user;
    }
   );

   
   export const registerThunk = createAsyncThunk(
    "user/register", async (credentials) => {
      const user = await authService.register(credentials);
      return user;
    }
   );
   
   export const logoutThunk = createAsyncThunk(
    "user/logout", async () => {
      const user = await authService.logout();
      return user;
    }
   );

   export const profileThunk = createAsyncThunk(
    "user/profile", async () => {
      const user = await authService.profile();
      return user;
    }
   );
   