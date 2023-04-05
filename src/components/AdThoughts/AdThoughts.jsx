import "./AdThoughts.scss"

const AdThoughts = () => {
    return ( 
        <div className="container text-center my-5">
            <div className="row container positioning ">
            <div className="video col-sm-12 col-md-5 col-lg-5 col-xl-6 col-xxl-6 ">
                <video controls>
                    <source src="/Images/Ad.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="right col-sm-12 col-md-7 col-lg-7 col-xl-6 col-xxl-6">
                <div className="right-left">
                    <h5 className="title">
                       <span className="lighter">Antonio Ant, Student</span>  |  <span className="bolder"> Northeastern Univeristy</span>
                    </h5>
                     
                </div>
                <div className="right-right fs-5 fs-4">
                    <span className="quote">
                        "I recently posted a gig on this platform to teach other students for the class CS5610 and I was amazed by how easy it was to find work and connect with other students. The platform is user-friendly and the community is great. I would highly recommend it to any student looking for freelancing opportunities at Northeastern University"
                    </span>
                </div>
                
            </div>
        </div>
        </div>
     );
}
 
export default AdThoughts;