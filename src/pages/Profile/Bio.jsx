import { BsFillPersonFill, BsFillEnvelopeFill, BsFillHouseFill, BsFillPersonCheckFill } from 'react-icons/bs';
import { useState } from 'react';


const Bio = () => {
    const [isEditing,setEditing] = useState(false)
    const [firstName,setFirstName] = useState("John"); 
    const [lastName,setLastName] = useState("Doe"); 
    const [userName,setUserName] = useState("johndoe123"); 
    const [email,setEmail] = useState("johndoe@example.com"); 
    const [address,setAddress] = useState("123 Main St, Anytown USA"); 
    const [bio,setBio] = useState("Web Developer | Freelancer"); 
  
    const handleEdit = ()=>{
        setEditing(true)
    }

    const handleSave = ()=>{
        //save logic
        setEditing(false)
    }

    const handleCancel = ()=>{
        setEditing(false)
        setFirstName("John")
        setLastName("Doe")
        setUserName("johndoe123")
        setEmail("johndoe@example.com")
        setAddress("123 Main St, Anytown USA")
        setBio("Web Developer | Freelancer")
    }

  return (
    <div className="border border-2 shadow-sm">
      <div className="container p-4">
      <div className="d-flex justify-content-between">
            <h3 className="fw-bold mb-4">Bio</h3>
            <button style={{border:"none",background:"inherit"} } onClick={handleEdit} ><ion-icon name="create-outline"></ion-icon>Edit</button>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold  p-2 rounded-start"><BsFillPersonFill /> First Name:</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">{isEditing ? (
            <input type="text" className="form-control" defaultValue={firstName} />
        ) : (
            <span>{firstName}</span>
        )}</div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold  p-2 rounded-start"><BsFillPersonFill /> Last Name:</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">{isEditing ? (
            <input type="text" className="form-control" defaultValue={lastName} />
        ) : (
            <span>{lastName}</span>
        )}</div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold  p-2 rounded-start"><BsFillPersonCheckFill /> Username:</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">{isEditing ? (
            <input type="text" className="form-control" defaultValue={userName} />
        ) : (
            <span>{userName}</span>
        )}</div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold  p-2 rounded-start"><BsFillEnvelopeFill /> Email:</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">
          {isEditing ? (
            <input type="text" className="form-control" defaultValue={email} />
        ) : (
            <span>{email}</span>
        )}
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold  p-2 rounded-start"><BsFillHouseFill /> Address:</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">{isEditing ? (
            <input type="text" className="form-control" defaultValue={address} />
        ) : (
            <span>{address}</span>
        )}</div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold  p-2 rounded-start"><ion-icon name="clipboard-outline"></ion-icon> Bio</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">{isEditing ? (
            <input type="text" className="form-control" defaultValue={bio} />
        ) : (
            <span>{bio}</span>
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

export default Bio;
