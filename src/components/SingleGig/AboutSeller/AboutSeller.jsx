import "./AboutSeller.scss"

const AboutSeller = ({user}) => {
    return ( 
        <div className="container">
                <span className="fs-5 fw-bold text-dark">About the Seller</span>
                <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info mt-4">
                <span className="fw-bold text-secondary">{user.userName}</span>
                {/* <div className="stars">
                <i class="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <i class="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <i class="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <i class="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <i class="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                  <span>5</span>
                </div> */}
                <button className="btn btn-success">Contact Me</button>
              </div>
            </div>
            <div className="box shadow col-lg-9 col-xl-8 col-xxl-8">
              <div className="items">
                <div className="item">
                  <span className="title text-secondary">Email</span>
                  <span className="desc fw-bold text-secondary">{user.email}</span>
                </div>
                <div className="item">
                  <span className="title text-secondary">Mobile Number</span>
                  <span className="desc fw-bold text-secondary">{user.mobile}</span>
                </div>
                {/* <div className="item">
                  <span className="title text-secondary">Avg. response time</span>
                  <span className="desc fw-bold text-secondary">4 hours</span>
                </div>
                <div className="item">
                  <span className="title text-secondary">Last delivery</span>
                  <span className="desc fw-bold text-secondary">1 day</span>
                </div>
                <div className="item">
                  <span className="title text-secondary">Languages</span>
                  <span className="desc fw-bold text-secondary">English</span>
                </div> */}
              </div>
              <hr />
              <p className="text-dark">
                {user.bio}
              </p>
            </div>
            </div>
     );
}
 
export default AboutSeller;