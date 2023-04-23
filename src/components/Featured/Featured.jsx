import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./Featured.scss";
import Typical from 'react-typical';
import { profileThunk } from '../../services/auth/auth-thunk';
import {useEffect,useState} from "react"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Featured = () => {

  const currentUser = useSelector((state) => state.auth.user);
  const userName = currentUser ? currentUser.userName : null;

  useEffect(()=>{
    dispatch(profileThunk())
  },[])


  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleBuyButtonClick = () =>{
    navigate('/buyGigs');
  }

  const handleNewButtonClick = () => {
    navigate('/productsearch');
  };
  const handleSellButtonClick = () =>{
    {userName ? 
          navigate('/createGigForm')
           :
            navigate('/login')
          
    }
    
  }



  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Hustle smarter, not harder - Link up with talented student experts to handle your daily grind with ease!</h1>
          <div className="search">
            <div className="d-flex flex-row align-items-center searchInput">
              <div className="col custom-marker">
                <Typical className="custom-marker"
                  loop={Infinity}
                  wrapper='b'
                  steps={[
                    'Code your way to cash',
                    4000,
                    'Monetize your business expertise',
                    4000,
                    'Build your way to success ',
                    4000,
                    'Design your own paycheck',
                    4000,
                    'Make a living with your words',
                    4000,
                    'Sell your music',
                    4000,
                    'Whip up your way to cash',
                    4000,
                    'From textbooks to cash', 
                    4000,
                    'Earn while you learn',
                    4000,
                    'Turn your hobbies into cash',
                    4000,
                    'Unleash your earning potential with side hustles',
                    4000
                  ]}
                />
              </div>
              <div className="col">
                <img src="./Images/naruto.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="popular mt-2">
            <span className="me-2">Popular:</span>
            <button className="btn btn-outline-success my-2 my-sm-0 me-1" onClick={handleBuyButtonClick}>Buy</button>
            <button className="btn btn-outline-success my-2 my-sm-0 me-1" onClick={handleSellButtonClick}>Sell</button>
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleNewButtonClick}>Want to know about the Food Products Sold, Click here!</button>
          </div>
        </div>
        <div className="right">
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;