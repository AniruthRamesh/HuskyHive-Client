import { updateUserThunk } from '../../services/users/users.thunks';
import { useDispatch } from 'react-redux';
import GigCardUserGenerator from '../../components/GigByUser/GigCardUserGenerator';

const Seller = ({location,canShow,Seller,currentUser}) => {
  const dispatch = useDispatch() 
   const becomeSeller = ()=>{
    dispatch(updateUserThunk({data:{isSeller:true,location}}))
    window.location.reload()
   }

  return (
    <div className="border border-2 shadow-sm">
      { canShow ?
        <>
        <div className="container p-4">
        {currentUser?.isSeller ? <>
          
          <div className="d-flex justify-content-center align-items-center">
              <GigCardUserGenerator />
            </div>
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
