import { BsFillPersonFill, BsFillEnvelopeFill, BsFillHouseFill, BsFillPersonCheckFill } from 'react-icons/bs';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserThunk } from '../../services/users/users.thunks';
import { profileThunk } from "../../services/auth/auth-thunk";
import { useSelector } from 'react-redux';
import axios from "axios"

const Bio = ({location,canShow }) => {
    const dispatch =  useDispatch()
    const [currentUser,setCurrentUser] = useState(null)
    const [isEditing,setEditing] = useState(false)
    const [firstName,setFirstName] = useState(currentUser?currentUser.firstName:null); 
    const [lastName,setLastName] = useState(currentUser?currentUser.lastName:null); 
    const [userName,setUserName] = useState(currentUser?currentUser.userName:null); 
    const [email,setEmail] = useState(currentUser?currentUser.email:null); 
    const [address,setAddress] = useState(currentUser?currentUser.address:null); 
    const [bio,setBio] = useState(currentUser?currentUser.bio:null); 
    const [mobile,setMobile] = useState(currentUser?currentUser.mobile:null)
    
    useEffect(()=>{
        const getData = async()=>{
          const response = await axios.get(`http://localhost:4000/api/users/${location}`)
          setCurrentUser(response.data)
          setFirstName(response.data.firstName)
          setLastName(response.data.lastName)
          setAddress(response.data.address)
          setBio(response.data.bio)
          setMobile(response.data.mobile)
          setUserName(response.data.userName)
          setEmail(response.data.email)
        }
        getData();
      },[])
    
    

    const handleEdit = ()=>{
        setEditing(true)
    }

    const handleSave = ()=>{
        setEditing(false)
        dispatch(updateUserThunk({data:{firstName,lastName,address,bio,location,mobile}}))
    }

  
    const handleCancel = ()=>{
        setEditing(false)
        setFirstName(currentUser?currentUser.firstName:null)
        setLastName(currentUser?currentUser.lastName:null)
        setAddress(currentUser?currentUser.address:null)
        setBio(currentUser?currentUser.bio:null)
        setMobile(currentUser?currentUser.mobile:null)
    }

    const handleFirstNameChange = (event) => {
      setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
      setLastName(event.target.value);
  }

  const handleAddressChange = (event) => {
      setAddress(event.target.value);
  }

  const handleBioChange = (event) => {
      setBio(event.target.value);
  }

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
}
  
console.log(userName,email,bio,address)
  return (
    <div className="border border-2 shadow-sm">
      <div className="container p-4">
      <div className="d-flex justify-content-between">
            <h3 className="fw-bold mb-4">Bio</h3>
            {canShow && <button style={{border:"none",background:"inherit"} } onClick={handleEdit} ><ion-icon name="create-outline"></ion-icon>Edit</button>}
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold  p-2 rounded-start"><BsFillPersonFill /> First Name:</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">{isEditing ? (
            <input type="text" className="form-control" defaultValue={firstName} onChange={handleFirstNameChange} />
        ) : (
            <span>{firstName}</span>
        )}</div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold  p-2 rounded-start"><BsFillPersonFill /> Last Name:</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">{isEditing ? (
            <input type="text" className="form-control" defaultValue={lastName} onChange={handleLastNameChange} />
        ) : (
            <span>{lastName}</span>
        )}</div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold  p-2 rounded-start"><BsFillPersonCheckFill /> Username:</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">
            <span>{userName}</span>
        </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-3 fw-bold  p-2 rounded-start"><BsFillEnvelopeFill /> Email:</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">
          
            <span>{email}</span>
          </div>
        </div>
        {canShow && <div className="row mb-2">
          <div className="col-sm-3 fw-bold  p-2 rounded-start"><BsFillHouseFill /> Address:</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">{isEditing ? (
            <input type="text" className="form-control" defaultValue={address} onChange={handleAddressChange}/>
        ) : (
            <span>{address}</span>
        )}</div>
        </div>}


        <div className="row mb-2">
          <div className="col-sm-3 fw-bold  p-2 rounded-start"><ion-icon name="clipboard-outline"></ion-icon> Bio</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">{isEditing ? (
            <input type="text" className="form-control" defaultValue={bio} onChange={handleBioChange} />
        ) : (
            <span>{bio}</span>
        )}</div>
        </div>

        {canShow && <div className="row mb-2">
          <div className="col-sm-3 fw-bold  p-2 rounded-start"><ion-icon name="clipboard-outline"></ion-icon> Mobile</div>
          <div className="col-sm-9 bg-light p-2 rounded-end">{isEditing ? (
            <input type="text" className="form-control" defaultValue={mobile} onChange={handleMobileChange} />
        ) : (
            <span>{mobile}</span>
        )}</div>
        </div>}

        {isEditing && <div >
        <button style={{border:"none",background:"inherit"}} onClick={handleSave} ><ion-icon name="save-outline"></ion-icon> Save</button>
                

        <button style={{border:"none",background:"inherit"}} onClick={handleCancel} ><ion-icon name="create-outline"></ion-icon> Cancel</button>
        </div>}
      </div>
    </div>
  );
};

export default Bio;
