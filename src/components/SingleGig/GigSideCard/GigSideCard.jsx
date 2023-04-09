import { BsCheck } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

const GigSideCard = () => {
  return (
    <div className="col-12 col-lg-4 col-xxl-4 color2 mt-3">
      <div className="border border-2 shadow container p-4">
        <div className="row align-items-center">
          <div className="col-8">
            <h4 className="fw-bold mb-0">1 AI Art Image</h4>
          </div>
          <div className="col-4 text-end">
            <h4 className="fw-bold mb-0">$59.99</h4>
          </div>
        </div>
        <p className="mt-3 text-secondary">
          I will create a unique high-quality AI-generated image based on a
          description that you give me.
        </p>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex align-items-center">
              <ion-icon name="time-outline"></ion-icon>
              <span className="ms-2 fw-bold text-dark">2 Day Delivery</span>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex align-items-center">
              <ion-icon name="infinite-outline"></ion-icon>
              <span className="ms-2 fw-bold text-dark">3 Revisions</span>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <h5 className="fw-bold mb-3">Features:</h5>
            <div className="d-flex align-items-center mb-3">
              <FaCheck className="green-tick me-2" style={{color:"lightblue"}} />
              <span className="text-secondary">Prompt writing</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FaCheck className="green-tick me-2" style={{color:"lightblue"}} />
              <span className="text-secondary">Artwork delivery</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FaCheck className="green-tick me-2" style={{color:"lightblue"}} />
              <span className="text-secondary">Image upscaling</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FaCheck className="green-tick me-2" style={{color:"lightblue"}} />
              <span className="text-secondary">Additional design</span>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <button className="btn btn-info w-100">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigSideCard;
