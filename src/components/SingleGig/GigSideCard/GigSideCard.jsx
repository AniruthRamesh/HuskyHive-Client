import { BsCheck } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import axios from "axios"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { profileThunk } from "../../../services/auth/auth-thunk";
import { useNavigate } from "react-router-dom";

const GigSideCard = ({data}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUser = useSelector((state) => state.auth.user);
  const userName = currentUser ? currentUser.userName : null;

  useEffect(()=>{
    dispatch(profileThunk())
  },[])

  
  const handlePayment = async ()=>{
    if(!currentUser){
      navigate("/login")
    }

    const response = await axios.post("http://localhost:4000/api/payment/create-checkout-session",{
      stripeData:{price_data: {
        currency: 'usd',
        product_data: {
          name: data.cardTitle,
        },
        unit_amount: data.price*100,
      },
      quantity: 1, },
      userData:{
        gigId: data._id,
        userId: currentUser._id
      }
      
    })
    window.location.href = response.data.url

  }
  
  return (
    <div className="col-12 col-lg-4 col-xxl-4 color2 mt-3">
      <div className="border border-2 shadow container p-4">
        <div className="row align-items-center">
          <div className="col-8">
            <h4 className="fw-bold mb-0">{data.cardTitle}</h4>
          </div>
          <div className="col-4 text-end">
            <h4 className="fw-bold mb-0">${data.price}</h4>
          </div>
        </div>
        <p className="mt-3 text-secondary">
          {data.cardDesc}
        </p>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex align-items-center">
              <ion-icon name="time-outline"></ion-icon>
              <span className="ms-2 fw-bold text-dark">2 {data.delivery} Delivery</span>
            </div>
          </div>
          <div className="col-6">
            {data.revision?<div className="d-flex align-items-center">
              <ion-icon name="infinite-outline"></ion-icon>
              <span className="ms-2 fw-bold text-dark">{data.revision} Revision</span>
            </div>:<></>}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <h5 className="fw-bold mb-3">Features:</h5>
            <div className="align-items-center mb-3">
              {data.features?.map(feature=><div>
                <FaCheck className="green-tick me-2" style={{color:"lightblue"}} />
                <span className="text-secondary">{feature}</span>
                <br />
              </div>)}
              {/* <FaCheck className="green-tick me-2" style={{color:"lightblue"}} />
              <span className="text-secondary">Prompt writing</span> */}
            </div>
            {/* <div className="d-flex align-items-center mb-3">
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
            </div> */}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <button className="btn btn-info w-100" onClick={handlePayment}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigSideCard;
