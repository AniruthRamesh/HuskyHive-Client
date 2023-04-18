import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { profileThunk } from '../../../services/auth/auth-thunk';
import axios from "axios"
import { useLocation } from 'react-router-dom';

const AddReview = () => {
    const pathname = useLocation().pathname
  let location = ""
  const path =  pathname.split("/")[2]


    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.auth.user);
  const [rating, setRating] = useState('');
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [error, setError] = useState('');

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const postReview = async ()=>{
        const response = await axios.post("http://localhost:4000/api/reviews/send",{userName:currentUser.userName,gigId:path,star:parseInt(rating),reviewTitle:title,review:review,userId:currentUser._id})
        
    }
    if (rating && title && review) {
        postReview();
      setRating('');
      setTitle('');
      setReview('');
      setError('');
    } else {
      setError('Please fill out all fields');
    }

    
  };

  useEffect(()=>{
    dispatch(profileThunk())
  },[])



  return (
    <div className="container my-4 col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-5 m-0">
      {
        currentUser && <>
        <h2 className=" mb-4 m-0" >Add Review</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="rating" className="fw-bold">Rating:</label>
          <select className="form-control mt-1" id="rating" value={rating} onChange={handleRatingChange} required>
            <option value="">--Select a rating--</option>
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </select>
        </div>
        <div className="form-group fw-bold mt-3">
          <label htmlFor="title">Review Title:</label>
          <input className="form-control mt-1" type="text" id="title" value={title} onChange={handleTitleChange} required />
        </div>
        <div className="form-group mt-3 fw-bold">
          <label htmlFor="review ">Review:</label>
          <textarea className="form-control mt-1" id="review" value={review} onChange={handleReviewChange} required />
        </div>
        <button className="btn btn-primary mt-2" type="button" onClick={handleSubmit}>Submit</button>
      </form>
        </>
      }
    </div>
  );
};

export default AddReview;
