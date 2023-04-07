const GigSideCard = () => {
    return ( 
        <div className=" col-12 col-lg-4 col-xxl-4 color2 mt-3"  >
                    <div className="border border-2  container">
                    <div className="row price mt-2 ">
                            <div className="col-xs-10 col-9 fs-5 col-xxl-9 fw-bold" >
                                <span className="text-md fs-4 fs-5 fs-4">1 AI Art image</span>
                            </div>
                            <div className="col-xs-2 col-3 fs-5 col-xxl-3 fw-bold">
                                <span className="text-md fs-4 fs-5 fs-4">$59.99</span>
                            </div>
                            
                            
                        </div>
                        <p className="text-secondary mt-2 fs-6">
                            I will create a unique high quality AI generated image based on a
                            description that you give me
                        </p>
                        <div className="row details">
                            <div className="item col-6 fw-bold">
                            <ion-icon name="time-outline"></ion-icon>
                            <span>2 DayDelivery</span>
                            </div>
                            <div className="item col-6 fw-bold">
                            <ion-icon name="infinite-outline"></ion-icon>
                            <span>3 Revisions</span>
                            </div>
                        </div>
                    <div className="features mt-2 text-secondary">
                        <div className="item">
                        <ion-icon name="checkmark-outline" className="green-tick"></ion-icon>
                        <span className="ms-2 fs-6">Prompt writing</span>
                        </div>
                        <div className="item">
                        <ion-icon name="checkmark-outline" className="green-tick"></ion-icon>
                        <span className="ms-2 fs-6">Artwork delivery</span>
                        </div>
                        <div className="item">
                        <ion-icon name="checkmark-outline" className="green-tick"></ion-icon>
                        <span className="ms-2 fs-6">Image upscaling</span>
                        </div>
                        <div className="item">
                        <ion-icon name="checkmark-outline" className="green-tick"></ion-icon>
                        <span className="ms-2 fs-6">Additional design</span>
                        </div>
                </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <button className="btn btn-secondary mt-3 mb-4 w-100">Continue</button>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    </div>
                        
                </div>
     );
}
 
export default GigSideCard;