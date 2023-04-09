import axios from 'axios';
// const API_BASE = process.env.REACT_APP_API_BASE_A9;
// const TUITS_API = `${API_BASE}/tuits`;
const HUSKY_API = 'http://localhost:4000/api/users';

export const createUser= async (user) => {
    const response = await axios.post(`${HUSKY_API}/newuser`,user);
    console.log(response)
    return response.data;
   }
   

export const findUser = async (uid) => {
    const response = await axios.get(`${HUSKY_API}/${uid}`);    
    const user = response.data;
    return user;
   }


  