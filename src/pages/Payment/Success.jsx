import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Success = () => {
    
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
              <p className="card-text">
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