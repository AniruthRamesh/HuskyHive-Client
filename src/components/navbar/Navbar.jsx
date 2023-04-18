import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useSelector } from 'react-redux';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { profileThunk,logoutThunk } from '../../services/auth/auth-thunk';
import { useDispatch } from 'react-redux';

const NavBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const currentUser = useSelector((state) => state.auth.user);
  const userName = currentUser ? currentUser.userName : null;

  useEffect(()=>{
    dispatch(profileThunk())
  },[])

  const handleLogout = async ()=>{
    await dispatch(logoutThunk())
    navigate("/")
  }


  return (  
    <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <Link to="/"  style={{textDecoration:"none",color:"white"}}> <span className="navbar-brand">HuskyHive</span> </Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">HuskyHive</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
          <Link to="/"  style={{textDecoration:"none",color:"white"}}> <span className="nav-link" aria-current="page">Home</span> </Link>
          </li>
          {!userName ? <><li className="nav-item">
          <Link to="/login"  style={{textDecoration:"none",color:"white"}}> <span className="nav-link">Sign In</span> </Link>
          </li>
          <li className="nav-item">
          <Link to="/register"  style={{textDecoration:"none",color:"white"}}> <span className="nav-link">Register</span> </Link>
          </li></>: <>
              <li className="nav-item">Hi {userName}!</li>
              <Link to={`/profile/${currentUser._id}`}  style={{textDecoration:"none",color:"white"}}> <span className="nav-link">Profile</span> </Link>
              <li className="nav-item" onClick={handleLogout}><span className="nav-link">Logout</span> </li>
          </>}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Features
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Buy</a></li>
              <li><a className="dropdown-item" href="#">Sell</a></li>
              <li><a className="dropdown-item" href="#">Accomodation</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
  );
}
 
export default NavBar;
