import { useLocation } from "react-router-dom";
import Reviews from "../../components/SingleGig/Reviews/Reviews";
import AboutSeller from "../../components/SingleGig/AboutSeller/AboutSeller";
import GigSideCard from "../../components/SingleGig/GigSideCard/GigSideCard";
import GigTitle from "../../components/SingleGig/GigTitle/GigTitle";
import AddReview from "../../components/SingleGig/AddReview/AddReview";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"

const Gig = () => {
    const pageId = useLocation()
    const {pathname} = pageId
    const id = pathname.split("/")[2]
    
    const [data,setData] = useState({})
    const [user,setUser] = useState({})
    const [profile,setProfile] = useState({})

    useEffect(()=>{
        const getData = async ()=>{
            const response = await axios.get(`http://localhost:4000/api/gigs/${id}`)
            setData(response.data)

            getUserData(response.data.userName);
        }

        const getUserData = async (userName) => {
            const response = await axios.get(`http://localhost:4000/api/users/byUserName/${userName}`);
            setUser(response.data);
        }
        getData();

    },[])


    return ( 
        <div className="container">
            <div className="d-flex flex-wrap">

                <GigTitle data={data}/>
                <GigSideCard data={data}/>

            </div>

            <AboutSeller user={user}/>
        
            <AddReview/>
          <Reviews data={data}/>

        </div> 
    );
}
 
export default Gig;