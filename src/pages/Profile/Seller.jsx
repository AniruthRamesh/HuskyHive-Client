import { BsFillPersonFill, BsBoxArrowInRight, BsClockHistory, BsCalendar } from 'react-icons/bs';
import { useState } from 'react';
import { updateUserThunk } from '../../services/users/users.thunks';
import { useDispatch } from 'react-redux';

const Seller = ({location,canShow,Seller,currentUser}) => {
  const dispatch = useDispatch() 
   const becomeSeller = ()=>{
    dispatch(updateUserThunk({data:{isSeller:true,location}}))
   }

  return (
    <div className="border border-2 shadow-sm">
      { canShow ?
        <>
        <div className="container p-4">
        {currentUser?.isSeller ? <>
          <div>Show Seller posted Gigs</div>
        </> : <>
        <div className="card bg-dark text-white">
          <h2 className="container mt-2 text-center">Become a Seller</h2>
          <div className="card-footer d-flex justify-content-between">
          <button className="btn btn-light mx-auto" onClick={becomeSeller}>Start Now</button>
        </div>

        </div>

        </>}
      
      </div>       
        </> : <><h1>Unauthorized Access</h1></>
      }
    </div>
  );
};

export default Seller;
