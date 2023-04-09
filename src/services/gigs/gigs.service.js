import axios from 'axios';
// const API_BASE = process.env.REACT_APP_API_BASE_A9;
// const TUITS_API = `${API_BASE}/tuits`;
const HUSKY_API = 'localhost:4000/api/gigs';

export const createGig= async (gigs) => {
    const response = await axios.post(HUSKY_API, gigs)
    return response.data;
   }
   

export const findGigs = async () => {
    const response = await axios.get(HUSKY_API);
    const gigs = response.data;
    return gigs;
   }
   

   export const deleteGig = async (gid) => {
    const response = await axios
      .delete(`${HUSKY_API}/${gid}`)
    return response.data
  }
  

  export const findSingleGig = async (gigs) => {
    const response = await axios
      .get(`${HUSKY_API}/${gigs._id}`);
    return response.data;
  }
  