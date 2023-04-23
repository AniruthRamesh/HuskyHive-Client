import { Link } from "react-router-dom";

const TabSection = ({location,mainLocation,canShow}) => {
    


    return (  
        <div className="list-group">
                    <Link to= {`/profile/${mainLocation}/bio`} style={{textDecoration:"none"}}><div className= {`list-group-item list-group-item-action ${location==="bio"?"active":""}` }>
                    <ion-icon name="person-outline"></ion-icon> <span >Bio</span>
                    </div></Link>
                    
                    { canShow &&
                        <>
                            
                            <Link to= {`/profile/${mainLocation}/seller`} style={{textDecoration:"none"}}><div className={`list-group-item list-group-item-action ${location==="seller"?"active":""}` }>
                            <ion-icon name="person-add-outline"></ion-icon> <span>Seller</span>
                            </div></Link>
                        </>
                    }

                { canShow &&
                        <>
                            
                            <Link to= {`/profile/${mainLocation}/reviews`} style={{textDecoration:"none"}}><div className={`list-group-item list-group-item-action ${location==="reviews"?"active":""}` }>
                            <ion-icon name="star-outline"></ion-icon> <span>Reviews</span>
                            </div></Link>
                        </>
                    }
                    
                    
                </div>
    );
}
 
export default TabSection;