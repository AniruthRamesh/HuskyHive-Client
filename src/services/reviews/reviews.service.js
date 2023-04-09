import axios from 'axios';
// const API_BASE = process.env.REACT_APP_API_BASE_A9;
// const TUITS_API = `${API_BASE}/tuits`;
const HUSKY_API = 'localhost:4000/api/reviews';

export const createReview= async (reviews) => {
    const response = await axios.post(HUSKY_API, reviews)
    return response.data;
   }
   

export const findReview = async (rid) => {
    const response = await axios.get(`${HUSKY_API}/${rid}`);
    const reviews = response.data;
    return reviews;
   }
   

   export const deleteReview = async (rid) => {
    const response = await axios
      .delete(`${HUSKY_API}/${rid}`)
    return response.data
  }

  