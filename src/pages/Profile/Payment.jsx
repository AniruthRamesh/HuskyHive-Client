import { BsCreditCard, BsFillPersonFill, BsCalendar } from 'react-icons/bs';
import { useState } from 'react';


const Payment = () => {
    const [isEditing,setIsEditing] = useState(false)
    const [cardNumber,setCardNumber] = useState("**** **** **** 1234")
    const [cardHolderName,setCardHolderName] = useState("John Doe")
    const [ExpirationDate,setExpirationDate] = useState("12/24")

    const handleEdit = ()=>{
        setIsEditing(true)
    }

    const handleCancel = ()=>{
        setIsEditing(false)
        setCardNumber("**** **** **** 1234")
        setCardHolderName("John Doe")
        setExpirationDate("12/24")
    }

    const handleSave = ()=>{
        //save logic
        setIsEditing(false)

    }


  return (
    <div className="border border-2 shadow-sm">
      <div className="container p-4">
        <div className="d-flex justify-content-between">
            <h3 className="fw-bold mb-4">Payment</h3>
            <button style={{border:"none",background:"inherit"}} onClick={handleEdit} ><ion-icon name="create-outline"></ion-icon>Edit</button>
        </div>
        
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold  p-2 rounded-start">
            <BsCreditCard className="me-2" />
            <span className="align-middle">Card Number:</span>
          </div>
          <div className="col-sm-9 bg-light p-2 rounded-end">
          {isEditing ? (
            <input type="text" className="form-control" defaultValue={cardNumber} />
        ) : (
            <span>{cardNumber}</span>
        )}
            
            </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold  p-2 rounded-start">
            <BsFillPersonFill className="me-2" />
            <span className="align-middle">Cardholder Name:</span>
          </div>
          <div className="col-sm-9 bg-light p-2 rounded-end">
          {isEditing ? (
            <input type="text" className="form-control" defaultValue={cardHolderName} />
        ) : (
            <span>{cardHolderName}</span>
        )}
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold  p-2 rounded-start">
            <BsCalendar className="me-2" />
            <span className="align-middle">Expiration Date:</span>
          </div>
          <div className="col-sm-9 bg-light p-2 rounded-end">
          {isEditing ? (
            <input type="text" className="form-control" defaultValue={ExpirationDate} />
        ) : (
            <span>{ExpirationDate}</span>
        )}
          </div>
        </div>

        {isEditing && <div >
        <button style={{border:"none",background:"inherit"}} onClick={handleSave} ><ion-icon name="save-outline"></ion-icon> Save</button>
                

        <button style={{border:"none",background:"inherit"}} onClick={handleCancel} ><ion-icon name="create-outline"></ion-icon> Cancel</button>
        </div>}
      </div>
    </div>
  );
};

export default Payment;
