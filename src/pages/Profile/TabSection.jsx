import { Link } from "react-router-dom";

const TabSection = ({location,mainLocation}) => {

    console.log(mainLocation)
    return (  
        <div class="list-group">
                    <Link to= {`/profile/${mainLocation}/bio`} style={{textDecoration:"none"}}><div className= {`list-group-item list-group-item-action ${location==="bio"?"active":""}` }>
                    <ion-icon name="person-outline"></ion-icon> <span >Bio</span>
                    </div></Link>
                    

                    <Link to= {`/profile/${mainLocation}/payment`} style={{textDecoration:"none"}}><div className={`list-group-item list-group-item-action ${location==="payment"?"active":""}` }>
                    <ion-icon name="card-outline"></ion-icon>  <span>Payment</span>
                    </div></Link>
                    
        

                    <Link to= {`/profile/${mainLocation}/seller`} style={{textDecoration:"none"}}><div className={`list-group-item list-group-item-action ${location==="seller"?"active":""}` }>
                    <ion-icon name="person-add-outline"></ion-icon> <span>Seller</span>
                    </div></Link>
                    
                </div>
    );
}
 
export default TabSection;