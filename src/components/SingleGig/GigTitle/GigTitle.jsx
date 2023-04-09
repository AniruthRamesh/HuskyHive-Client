import "./GigTitle.scss"

const GigTitle = () => {
    return ( 
        <div className="container col-12 col-lg-8 col-xxl-8 color1 mt-3">
                    <div>Location</div>
                    <div className="text-dark fw-bold fs-2">
                        <span>I will format your book ebook magazine and pdf</span>
                    </div>
                    <div className="mt-3">
                                <img
                        className="pp"
                        src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                        />
                        <span className="fw-bold ms-4">
                            bruno_malagrino
                        </span>
                        <span className="ms-3 text-secondary">
                            |
                        </span>
                        <span className="ms-2">
                        <i class="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <i class="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <i class="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <i class="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <i class="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                        <span className="ms-1">5</span>
                        </span>
                        <hr />
                    </div>
                    <div>
                            <img className="img-fluid"
                    src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    />
                    </div>

                    <div className="mt-4">
                        <span className="fw-bold fs-5">About this Gig</span>
                        <p className="text-secondary fs-6 mt-3">
                            Hello! <br /> I'm Bruno Malagrino, a visual designer. With over 11 years of experience in the creative fields working remotely on various creative projects.
                            <br />When you are starting a new business or refreshing the look of your company, good brand identity should not only be attractive but also represent the values of your brand. I listen carefully to what you stand for and translate it into a visual language to create brands that will stand out and make an impact.
                            <br />Our creation process adapts to the needs of our client, we carefully analyze every type of request and after having built a creative brief, we start to evaluate the most suitable approach to the project.
                            <br />
                            Please Check the <b>Extras menú </b> displayed once you select your package so you can have a better idea of what can i offer you and the prices. <br />
                            <b>FAQ</b> below
                            <br />For any clarification about the project, contact me and I will happy to help you.

                        </p>
                    </div>
                    <hr />
                </div>
                
     );
}
 
export default GigTitle;