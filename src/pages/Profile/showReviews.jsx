import axios from "axios"
import Reviews from "../../components/SingleGig/Reviews/Reviews";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";

const ShowReviews = ({location,canShow,Seller,currentUser}) => {
    const getData = async()=>{
        const response = await axios.get(`http://localhost:4000/api/reviews/user/${currentUser.userName}`)
        setReviewData(response.data)
    }
    const [reviewData,setReviewData] =  useState(getData())
    
    
   
    return ( 
        <div className="border border-2 shadow-sm">
            {reviewData.length >0 ? 
            <div className="container mt-3">
            <h2 className="mb-4">Reviews Posted by you
            <h5 className="mt-2">Click userName to view Gig</h5>
            </h2>
            
            {
              reviewData.map(data=>{
                return(
                <div>
                
                  
                    <div className="row">
                      {/* <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1">
                        <div>
                          
                          <img src="https://randomuser.me/api/portraits/men/1.jpg" className="rounded-circle img-fluid" alt="user-image" width="100"/>
                        </div>
                      </div> */}
                      <div className="col-9 col-sm-9 col-md-9 col-lg-7 col-xl-7 col-xxl-7">
                        <div className="card border-0">
                          <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                              <div>
                              <Link to={`/gig/${data.gigId}`} className="fw-bold" style={{textDecoration:"none",color:"inherit"}}><span classNameName="mt-2 mb-0 fw-bold fs-5" >{data.userName}</span></Link>
                              <br />
                              
                      
                                
                              <span className="fs-4"><i className={`bi bi-star-fill text-${parseInt(data.star) >= 1 ? 'warning' : 'muted'}`}></i></span>
                                <span className="fs-4"><i className={`bi bi-star-fill text-${parseInt(data.star) >= 2 ? 'warning' : 'muted'}`}></i></span>
                                <span className="fs-4"><i className={`bi bi-star-fill text-${parseInt(data.star) >= 3 ? 'warning' : 'muted'}`}></i></span>
                                <span className="fs-4"><i className={`bi bi-star-fill text-${parseInt(data.star) >= 4 ? 'warning' : 'muted'}`}></i></span>
                                <span className="fs-4"><i className={`bi bi-star-fill text-${parseInt(data.star) >= 5 ? 'warning' : 'muted'}`}></i></span>

                                {/* <span className="fs-4"><i className="bi bi-star-fill text-warning"></i></span>
                                <span className="fs-4"><i className="bi bi-star-fill text-warning"></i></span>
                                <span className="fs-4"><i className="bi bi-star-fill text-warning"></i></span>
                                <span className="fs-4"><i className="bi bi-star-fill text-warning"></i></span>
                                <span className="fs-4"><i className="bi bi-star-fill text-muted"></i></span> */}
                                <span className="ms-2 text-muted fs-5">({data.star})</span>
                              </div>
                              
                            </div>
                            <h5 className="card-title mb-4">{data.reviewTitle}</h5>
                            <p className="card-text">{data.review}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>)
              })
            }
        </div> : <div className="border border-2 shadow-sm">
                        <div className="container text-center my-5">
                            <div className="container row">
                            <h2 className="container">You have not posted any reviews yet!</h2>
                        </div>
                        </div>
                </div>
            }
        </div>
     );
}
 
export default ShowReviews;