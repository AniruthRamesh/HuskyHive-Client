import "./GigTitle.scss"

const GigTitle = ({data}) => {
    
    return ( 
        <div className="container col-12 col-lg-8 col-xxl-8 color1 mt-3">
                    
                    <div className="text-dark fw-bold fs-2">
                        <span>{data.title}</span>
                    </div>
                    <div className="mt-3">
                                <img
                        className="pp"
                        src={`${data.pp}`}
                        alt=""
                        />
                        <span className="fw-bold ms-4">
                            {data.userName}
                        </span>
                        {/* <span className="ms-3 text-secondary">
                            |
                        </span>
                        <span className="ms-2">
                        <i className="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <i className="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <i className="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <i className="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <i className="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <span className="ms-1">{data.totalStars}</span>
                        </span> */}
                        <hr />
                    </div>
                    <div>
                            <img className="img-fluid"
                    src={`${data.images?data.images[0]:``}`}
                    alt=""
                    />
                    </div>

                    <div className="mt-4">
                        <span className="fw-bold fs-5">About this Gig</span>
                        <p className="text-secondary fs-6 mt-3">
                            {data.desc}

                        </p>
                    </div>
                    <hr />
                </div>
                
     );
}
 
export default GigTitle;