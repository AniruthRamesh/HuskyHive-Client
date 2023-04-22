import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img 
        src={product.image_url} 
        alt={product.product_name} 
        className="card-img-top img-fluid mt-2" 
        style={{maxWidth: '200px', maxHeight: '200px'}}
      />
      <div className="card-body">
        <h5 className="card-title">{product.product_name}</h5>
        <p className="card-text">{product.brands}</p>
        <p className="card-text">{product.ingredients_text}</p>
        <p className="card-text">{product.nutriscore_grade}</p>
      </div>
    </div>
  );
};

export default ProductCard;