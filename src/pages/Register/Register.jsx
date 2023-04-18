import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Register = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true); // added state for passwords match
  const [isSeller, setIsSeller] = useState(false);
  const [error,setError] = useState(null)

  const navigate = useNavigate()

  const serverLogic = async ()=>{
    try{
      const response = await axios.post("http://localhost:4000/api/auth/register",{userName,email,password,isSeller},{withCredentials:true})
      const res = response.status
      if(res===201){
        navigate("/login")
      }
      if(res===200){
        setError("Email or Username is not unique")
      }
    }catch(err){
      setError(err)
    }
    
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      setConfirmPassword("");
      setPassword("")
      return;
    }
    setPasswordsMatch(true);
    // Handle register logic here
    
    await serverLogic()

  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="form-floating mb-3">
                  <input className="form-control" id="username" type="text" placeholder="Username" value={userName} onChange={(e) => setUsername(e.target.value)} required />
                  <label htmlFor="username">Username</label>
                </div>
                <div className="form-floating mb-3">
                  <input className="form-control" id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input className="form-control" id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input className="form-control" id="confirmPassword" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                </div>
                {!passwordsMatch && <p className="text-danger mb-3">Passwords do not match</p>} {/* display error if passwords don't match */}
                <div className="form-check mb-3">
                    <input className="form-check-input" id="isSeller" type="checkbox" checked={isSeller} onChange={(e) => setIsSeller(e.target.checked)} />
                    <label className="form-check-label" htmlFor="isSeller">I'm a seller</label>
                  </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" id="termsOfService" type="checkbox" required />
                  <label className="form-check-label" htmlFor="termsOfService">I agree to the terms of service</label>
                </div>
                
                <div className="d-flex align-items-center justify-content-center mt-4 mb-0">
                  <button className="btn btn-primary">Create Account</button>
                  <Link to="/" className="ms-3">Cancel</Link>
                </div>
              </form>
            </div>
            <div className="card-footer text-center py-3">
              <div className="small"><Link to="/login">Already have an account? Login here</Link></div>
            </div>

            {error && <div className="alert alert-danger mt-3">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;