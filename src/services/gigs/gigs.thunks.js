import {createAsyncThunk}
  from "@reduxjs/toolkit"
import * as service
  from "./gigs.service"

export const findGigsThunk = createAsyncThunk(
  'gigs/findgigs', async () =>
    await service.findGigs()
)

export const deleteGig = createAsyncThunk(
    'gigs/deleteGig',
    async (gigId) => {
      await service.deleteGig(gigId)
      return gigId
  })
  

  export const createGigsThunk = createAsyncThunk(
    'gigs/createGig',
    async (gig) => {
      const newGig = await service.createGig(gig)
      return newGig
  })
  
 

