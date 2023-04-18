import axios from 'axios';
// const API_BASE = process.env.REACT_APP_API_BASE_A9;
// const TUITS_API = `${API_BASE}/tuits`;
const HUSKY_API = 'http://localhost:4000/api/users';
const api = axios.create({ withCredentials: true });

export const findUser = async (uid) => {
    const response = await api.get(`${HUSKY_API}/${uid}`);    
    const user = response.data;
    return user;
   }


export const updateUser = async ({data})=>{
    console.log(data)
    const response = await api.put(`${HUSKY_API}/${data.location}`,{data})
    const user = response.data;
    console.log(user)
    return user;
}