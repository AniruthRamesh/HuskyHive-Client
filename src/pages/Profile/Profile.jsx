import ProfilePic from "./ProfilePic";
import TabSection from "./TabSection"; 
import Bio from "./Bio";
import Seller from "./Seller";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router"
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { profileThunk } from "../../services/auth/auth-thunk";
import ShowReviews from "./showReviews";

const Profile = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.auth.user);
    

    
    const currentUserId = currentUser ? currentUser._id : null;

    useEffect(()=>{
        dispatch(profileThunk())
      },[])

    
      const pathname = useLocation().pathname
      let location = ""
      const path =  pathname.split("/")
    
      const [canShow,setCanShow] = useState(path[2]===currentUserId)
    
    useEffect(() => {
        setCanShow(path[2] === currentUserId);
      }, [path[2], currentUserId]);

    
    
    if(path.length===4){
        location = path[path.length-1]
    }
    else{
        location = "bio"
    }
    

    return ( 
        <div className="container">
            <div className="row mt-4">
            <div className="col-4 col-md-3 col-lg-2 col-2 order-1 order-md-1">
                <TabSection location={location} mainLocation={path[2]} canShow={canShow}/>
                </div>
            <div className="col-12 col-lg-8 order-xxl-2 order-xl-2 order-lg-2 order-sm-3 order-3 order-md-3 mb-4">
                    <Routes>
                        <Route index  element={<Bio location={path[2]} canShow={canShow} currentUser={currentUser} />}/>
                        <Route path="bio" element={<Bio location={path[2]} canShow={canShow} currentUser={currentUser} />}/>
                        <Route path="seller" element={<Seller location={path[2]} canShow={canShow} Seller={currentUser?currentUser.isSeller:null} currentUser={currentUser}  />}/>
                        <Route path="reviews" element={<ShowReviews location={path[2]} canShow={canShow} Seller={currentUser?currentUser.isSeller:null} currentUser={currentUser}  />}/>
                    </Routes>
                
                
                
            </div>

            <div className="col-3 col-md-3 col-lg-2 order-xxl-3 order-xl-3 order-lg-3 order-md-2 order-sm-2 order-2 mb-4 ms-auto ">
                <ProfilePic location={path[2]}/>
            </div>
            </div>
        </div>
     );
}
 
export default Profile;