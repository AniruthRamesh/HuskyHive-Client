import { BsFillPersonFill, BsBoxArrowInRight, BsClockHistory, BsCalendar } from 'react-icons/bs';
import { useState } from 'react';


const Seller = () => {
    const [isEditing,setEditing] = useState(false)
    const [sellerName,setSellerName] = useState("John Doe"); 
    const [productsSold,setProductsSold] = useState(200); 
    const [averageResponseTime,setAverageResponseTime] = useState("2 hours"); 
    const [memberSince,setMemberSince] = useState("March 1"); 
    const [lastDelivery,setLastDelivery] = useState("March 23"); 
  
    const handleEdit = ()=>{
        setEditing(true)
    }

    const handleSave = ()=>{
        //save logic
        setEditing(false)
    }

    const handleCancel = ()=>{
        setEditing(false)
        setSellerName("John")
        setProductsSold(200)
        setAverageResponseTime("2 hours")
        setMemberSince("March 1")
        setAddress("123 Main St, Anytown USA")
        setLastDelivery("March 23")
    }

  return (
    <div className="border border-2 shadow-sm">
      <div className="container p-4">
      <div className="d-flex justify-content-between">
            <h3 className="fw-bold mb-4">Seller</h3>
            <button style={{border:"none",background:"inherit"}} onClick={handleEdit} ><ion-icon name="create-outline"></ion-icon>Edit</button>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold p-2 rounded-start"><BsFillPersonFill /> Seller Name:</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">{isEditing ? (
            <input type="text" className="form-control" defaultValue={sellerName} />
        ) : (
            <span>{sellerName}</span>
        )}</div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold p-2 rounded-start"><BsBoxArrowInRight /> Products Sold:</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">{isEditing ? (
            <input type="text" className="form-control" defaultValue={productsSold} />
        ) : (
            <span>{productsSold}</span>
        )}</div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold p-2 rounded-start"><BsClockHistory /> Response Time:</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">{isEditing ? (
            <input type="text" className="form-control" defaultValue={averageResponseTime} />
        ) : (
            <span>{averageResponseTime}</span>
        )}</div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold p-2 rounded-start"><BsCalendar /> Member Since:</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">{isEditing ? (
            <input type="text" className="form-control" defaultValue={memberSince} />
        ) : (
            <span>{memberSince}</span>
        )}</div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold p-2 rounded-start"><BsCalendar /> Last Delivery:</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">{isEditing ? (
            <input type="text" className="form-control" defaultValue={lastDelivery} />
        ) : (
            <span>{lastDelivery}</span>
        )}</div>
        </div>

        {isEditing && <div >
        <button style={{border:"none",background:"inherit"}} onClick={handleSave} ><ion-icon name="save-outline"></ion-icon> Save</button>
                

        <button style={{border:"none",background:"inherit"}} onClick={handleCancel} ><ion-icon name="create-outline"></ion-icon> Cancel</button>
        </div>}
      </div>
    </div>
  );
};

export default Seller;
