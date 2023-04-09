import { useState,useEffect,useRef } from "react";
import "./Navbar.scss"
import { Link } from "react-router-dom";

const NavBar = () => {
    const [active,setActive] = useState(false)

    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true): setActive(false)
    }


    useEffect(()=>{
        window.addEventListener("scroll",isActive);
        
        return ()=>{
            window.removeEventListener("scroll",isActive);
        };
    },[]);


    return (  
        <div className={`navbar ${active ? "active" : ""}`}>
            <div className="container">
                <div className="logo">
                   <Link to="/" style={{"textDecoration":"none","color":"inherit"}}>HuskyHive</Link> 
                </div>

                <div className="links">
                    <span>Explore</span>
                    <span>English</span>
                    <Link to="/login" style={{"textDecoration":"none","color":"inherit"}}>
                        <span>Sign in</span>
                    </Link>
                    
                    <Link to="/register" style={{"textDecoration":"none","color":"inherit"}}>
                        <button>Join</button>
                    </Link>
                    
                </div>

                {active && <>
                    <hr />
                    <div className="menu row">
                    
                        <span className=" col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1">Buy</span>
                        <span className=" col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1">Sell</span>
                        <span className=" col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1">Food</span>
                        <span className="d-none d-lg-block col-lg-2 col-xl-2 col-xxl-2">Accomodation</span>
                        <span className="d-none d-xxl-block col-xxl-1">Lectures</span>
                        <span className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1">Music</span>
                        <span className="d-none d-lg-block col-lg-2 col-xl-2 col-xxl-2">Digital Art</span>
                        <span className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1">Video</span>
                        <span className="d-none d-xl-block  col-xl-1 col-xxl-1">Animation</span>
                        <span className="d-none d-sm-block col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1">Art</span>
                        
                    </div>
                </>
                }
            </div>
        </div>
    );
}
 
export default NavBar;