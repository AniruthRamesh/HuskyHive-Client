import React from 'react';
import CreateGigForm from '../../components/GigForm/GigForm';

const CreateGigPage = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Create Sell Gig</a>
      </nav>
      <CreateGigForm />
    </div>
  );
};

export default CreateGigPage;