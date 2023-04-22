import React from 'react';
import ProductSearch from '../../components/ProductSearch/ProductSearch';

const ProductSearchPage = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Product Search</a>
      </nav>
      <div style={{ paddingBottom: '80px' }} className='bg-light'>
        <ProductSearch />
      </div>
    </div>
  );
};

export default ProductSearchPage;