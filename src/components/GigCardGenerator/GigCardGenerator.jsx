import GigCard from "../GigCard/GigCard"; 
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
const GigCardGenerator = () => {
    const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      const gettingData = async () => {
        const response = await axios.get("http://localhost:4000/api/gigs");
        setProjects(response.data);
      };
  
      gettingData();
    }, []);
  
    return (
      <div className="container text-center my-5">
        <div className="container row">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div
                key={project._id}
                className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3"
              >
                <Link to={`/gig/${project._id}`} className="text-dark">
                  <GigCard card={project} />
                </Link>
              </div>
            ))
          ) : (
            <div>
              <ion-icon name="reload-outline"></ion-icon>
            </div>
          )}
        </div>
      </div>
    );
  };
  export default GigCardGenerator;