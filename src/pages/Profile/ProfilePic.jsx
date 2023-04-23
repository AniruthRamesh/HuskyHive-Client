import { useEffect,useState } from "react";
import axios from "axios"

const ProfilePic = ({location}) => {


    
    const [allData,setAllData] =  useState({})
    const [userName,setUserName] = useState(""); 
    const [bio,setBio] = useState(""); 
    
    useEffect(()=>{
        const getData = async()=>{
          const response = await axios.get(`http://localhost:4000/api/users/${location}`)
          setUserName(response.data.userName)
          setBio(response.data.bio)
          setAllData(response.data)
        }
        getData();
      },[])

      

    return (  
        <div className="profile-header text-center">
                <img
                    src={`${allData.pp}`}
                    alt="Profile Picture"
                    className="profile-picture img-fluid rounded-circle"
                />
                <h2 className="profile-username mt-3">{userName}</h2>
                <p className="profile-bio">{bio}</p>
                </div>
    );
}
 
export default ProfilePic;