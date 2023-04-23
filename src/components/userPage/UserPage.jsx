import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { profileThunk } from "../../services/auth/auth-thunk";

const UsersPage = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const user = useSelector((state) => state.auth.user);
  const isAdmin = user.isAdmin?user.isAdmin:false;

  const fetchUsers = async () => {
    try {
      console.log(isAdmin);
      if (!isAdmin) {
        throw new Error("You do not have permission to view the users");
      }
      else{
      const response = await axios.get("http://localhost:4000/api/auth/getAllUsers");
      console.log(response);
      setUsers(response.data);
      setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
      setIsLoading(false);
    }
  };


  useEffect(() => {
    dispatch(profileThunk());
    fetchUsers();
  }, [dispatch, isAdmin]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      <h1>All Users</h1>
      <div className="row">
        {users.map((user) => (
          <div key={user._id} className="col-lg-4 col-md-6 mb-4">
            <div className="shadow card h-100">
              <div className="card-body">
                <h4 className="card-title">{user.userName}</h4>
                <p className="card-text">{user.email}</p>
                <p className="card-text">{user.bio}</p>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;