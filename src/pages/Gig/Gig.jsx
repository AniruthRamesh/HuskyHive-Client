import { useLocation } from "react-router-dom";
import Reviews from "../../components/SingleGig/Reviews/Reviews";
import AboutSeller from "../../components/SingleGig/AboutSeller/AboutSeller";
import GigSideCard from "../../components/SingleGig/GigSideCard/GigSideCard";
import GigTitle from "../../components/SingleGig/GigTitle/GigTitle";


const Gig = () => {
    const pageId = useLocation()
    const {pathname} = pageId
    const id = pathname.split("/")[2]
    

    return ( 
        <div className="container">
            <div className="d-flex flex-wrap">

                <GigTitle/>
                <GigSideCard/>

            </div>

            <AboutSeller/>

          <Reviews/>

        </div> 
    );
}
 
export default Gig;