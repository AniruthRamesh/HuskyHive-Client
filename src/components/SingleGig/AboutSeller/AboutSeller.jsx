import "./AboutSeller.scss"

const AboutSeller = () => {
    return ( 
        <div className="container">
                <span className="fs-5 fw-bold">About the Seller</span>
                <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info mt-4">
                <span className="fw-bold text-secondary">Anna Bell</span>
                <div className="stars">
                <i class="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <i class="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <i class="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <i class="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <i class="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                  <span>5</span>
                </div>
                <button className="btn btn-success">Contact Me</button>
              </div>
            </div>
            <div className="box  col-lg-9 col-xl-8 col-xxl-8">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc fw-bold text-secondary">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc fw-bold text-secondary">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc fw-bold text-secondary">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc fw-bold text-secondary">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc fw-bold text-secondary">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
            </div>
     );
}
 
export default AboutSeller;