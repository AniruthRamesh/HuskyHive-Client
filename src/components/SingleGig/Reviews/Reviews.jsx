import { useEffect,useState } from "react";
import axios from "axios"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Reviews = () => {
  const [reviews,setReviews] = useState([])

  const pathname = useLocation().pathname
  let location = ""
  const path =  pathname.split("/")[2]
  const stars = [];
  useEffect(()=>{

    const getData = async ()=>{
      const response = await axios.get(`http://localhost:4000/api/reviews/${path}`)
      setReviews(response.data)
    }
    
    getData();
    
  },[])


    return ( 
        <div className="container mt-5">
          {
            reviews.length>0 &&
            <>
                <h2 className="mb-4">Reviews</h2>
                {
                  reviews.map(data=>{
                    return(
                    <div>
                    
                      
                        <div className="row">
                          {/*<div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1">
                            <div>
                              
                              <img src="https://randomuser.me/api/portraits/men/1.jpg" className="rounded-circle img-fluid" alt="user-image" width="100"/>
                            </div> 
                          </div>*/}
                          <div className="col-9 col-sm-9 col-md-9 col-lg-7 col-xl-7 col-xxl-7">
                            <div className="card border-0">
                              <div className="card-body">
                                <div className="d-flex justify-content-between mb-3">
                                  <div>
                                  <Link to={`/profile/${data.userId}/bio`} className="fw-bold" style={{textDecoration:"none",color:"inherit"}}><span classNameName="mt-2 mb-0 fw-bold fs-5" >{data.userName}</span></Link>
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
            </>
          }
        </div>
     );
}
 
export default Reviews;