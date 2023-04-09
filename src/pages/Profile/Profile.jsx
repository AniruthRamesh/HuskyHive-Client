import ProfilePic from "./ProfilePic";
import TabSection from "./TabSection"; 
import Bio from "./Bio";
import Payment from "./Payment";
import Seller from "./Seller";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router"

const Profile = () => {
    const pathname = useLocation().pathname
    let location = ""
    const path =  pathname.split("/")
    console.log(path)
    if(path.length===4){
        location = path[path.length-1]
    }
    else{
        location = "bio"
    }

    return ( 
        <div className="container">
            <div className="row mt-4">
            <div class="col-4 col-md-3 col-lg-2 col-2 order-1 order-md-1">
                <TabSection location={location} mainLocation={path[2]}/>
                </div>
            <div className="col-12 col-lg-8 order-xxl-2 order-xl-2 order-lg-2 order-sm-3 order-3 order-md-3 mb-4">
                    <Routes>
                        <Route index  element={<Bio/>}/>
                        <Route path="bio" element={<Bio/>}/>
                        <Route path="payment" element={<Payment/>}/>
                        <Route path="seller" element={<Seller/>}/>
                    </Routes>
                
                
                
            </div>

            <div className="col-3 col-md-3 col-lg-2 order-xxl-3 order-xl-3 order-lg-3 order-md-2 order-sm-2 order-2 mb-4 ms-auto ">
                <ProfilePic/>
            </div>
            </div>
        </div>
     );
}
 
export default Profile;