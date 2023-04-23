import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateGigForm = () => {
  const navigate = useNavigate()
  const [projectCardImg, setProjectCardImg] = useState('');
  const [pp, setPp] = useState('');
  const [cat, setCat] = useState('');
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [cardDesc, setCardDesc] = useState('');
  const [cardTitle, setCardTitle] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);
  const [deliveryTime, setDeliveryTime] = useState('');
  const [revisionNumber, setRevisionNumber] = useState('');
  const [features, setFeatures] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/gigs', {
        projectCardImg,
        pp,
        cat,
        userName,
        title,
        desc,
        cardDesc,
        cardTitle,
        price,
        images,
        deliveryTime,
        revisionNumber,
        features,
      });
      navigate("/buyGigs")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container  mt-4 mb-4">
      <form onSubmit={handleSubmit} className='mb-2 bg-light'>
    <div className="mb-3 me-5">
      <label htmlFor="projectCardImg" className="form-label">
        Project Card Image:
      </label>
      <input
        type="text"
        className="form-control"
        id="projectCardImg"
        value={projectCardImg}
        onChange={(e) => setProjectCardImg(e.target.value)}
      />
    </div>

    <div className="mb-3 me-5">
      <label htmlFor="pp" className="form-label">
        Profile Picture:
      </label>
      <input
        type="text"
        className="form-control"
        id="pp"
        value={pp}
        onChange={(e) => setPp(e.target.value)}
      />
    </div>

    <div className="mb-3 me-5">
      <label htmlFor="cat" className="form-label">
        Category:
      </label>
      <input
        type="text"
        className="form-control"
        id="cat"
        value={cat}
        onChange={(e) => setCat(e.target.value)}
      />
    </div>

    <div className="mb-3 me-5">
      <label htmlFor="userName" className="form-label">
        Username:
      </label>
      <input
        type="text"
        className="form-control"
        id="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>

    <div className="mb-3 me-5">
      <label htmlFor="title" className="form-label">
        Title:
      </label>
      <input
        type="text"
        className="form-control"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>

    <div className="mb-3 me-5">
      <label htmlFor="desc" className="form-label">
        Description:
      </label>
      <textarea
        className="form-control"
        id="desc"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
    </div>

    <div className="mb-3 me-5">
      <label htmlFor="cardDesc" className="form-label">
        Card Description:
      </label>
      <textarea
        className="form-control"
        id="cardDesc"
        value={cardDesc}
        onChange={(e) => setCardDesc(e.target.value)}
      />
    </div>

    <div className="form-group me-5">
        <label htmlFor="cardTitle">Card Title:</label>
        <input
          type="text"
          id="cardTitle"
          className="form-control"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
        />
      </div>

      <div className="mb-3 me-5">
    <label htmlFor="price" className="form-label">Price:</label>
    <input
      type="number"
      id="price"
      className="form-control"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
    />
  </div>

  <div className="mb-3 me-5">
    <label htmlFor="images" className="form-label">Images:</label>
    <input
      type="text"
      id="images"
      className="form-control"
      value={images}
      onChange={(e) => setImages(e.target.value)}
      multiple
    />
  </div>
  <div className="mb-3 me-5">
    <label htmlFor="deliveryTime" className="form-label">Delivery Time:</label>
    <input
      type="number"
      id="deliveryTime"
      className="form-control"
      value={deliveryTime}
      onChange={(e) => setDeliveryTime(e.target.value)}
      multiple
    />
  </div>
  <div className="mb-3 me-5">
    <label htmlFor="revisionNumber" className="form-label">Revision Number:</label>
    <input
      type="number"
      id="revisionNumber"
      className="form-control"
      value={revisionNumber}
      onChange={(e) => setRevisionNumber(e.target.value)}
      multiple
    />
  </div>

  <div className="mb-3 me-5">
      <label htmlFor="features" className="form-label">
        Features
      </label>
      <input
        type="text"
        className="form-control"
        id="features"
        value={features}
        onChange={(e) => setFeatures(e.target.value)}
      />
    </div>


      <button type="submit" className='btn btn-outline-success my-2 my-sm-0'>Submit</button>
    </form>
    </div>
  );
};

export default CreateGigForm;