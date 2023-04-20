import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useState } from "react";

const Success = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const gigId = searchParams.get("gigId");
  const userId = searchParams.get("userId");
  const [gigData,setGigData] = useState(null)

  useEffect(()=>{
    const getData = async ()=>{
      const response =  await axios.get(`http://localhost:4000/api/gigs/${gigId}`)
      setGigData(response.data)
    }

    getData();
  })
  
    
    return ( 
        <div className="container">
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Payment Successful</h2>
              <p className="card-text">
                Thank you for your purchase! Your transaction has been completed successfully.
              </p>
              
              {gigData && <div className="text-center">
                <ProjectCard card={gigData}/>
              </div>}

              <p className="card-text mt-3">
                If you have any questions or concerns, please do not hesitate to contact us at support@huskyhive.com.
              </p>
              <Link to="/" className="btn btn-success mt-4">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default Success;