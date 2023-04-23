import GigCard from "../GigCard/GigCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const GigCardUserGenerator = () => {
  const [gigs, setGigs] = useState([]);
  const userName = useSelector((state) => state.auth.user?.userName);

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        console.log(userName)
        const response = await axios.get(`http://localhost:4000/api/gigs/user/${userName}`);
        console.log(response.data);
        setGigs(response.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    if (userName) {
      fetchGigs();
    }
  }, [userName]);

  return (
    <div className="container text-center my-5">
      <div className="container row">
        {gigs && gigs.length > 0 ? (
          
          gigs.map((gig) => (
            <div
              key={gig._id}
              className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3"
            >
              <div class="container bg-dark justify-content-center p-3 rounded mb-3">
  <h1 class="text-white text-center mb-0">Hi {userName}!</h1>
  <p class="text-white text-center mb-0">Gigs Posted by You</p>
</div>
              <Link to={`/gig/${gig._id}`} className="text-dark">
                <GigCard card={gig} />
              </Link>
            </div>
          ))
        ) : (
          <div>
            <h1> Hi {userName} </h1>
            <p>You have no gigs posted</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GigCardUserGenerator;