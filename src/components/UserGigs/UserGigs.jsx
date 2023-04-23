import React from 'react';
import { useSelector } from 'react-redux';
import GigCard from "../GigCard/GigCard";

const UserGigs = () => {
    const userName = useSelector(state => state.auth.user?.userName ?? '');
    const gigs = useSelector((state) => state.gigs.gigs);
    console.log(userName)
    console.log(gigs)
    const userGigs = gigs && Array.isArray(gigs) && gigs.filter((gig) => gig.userName === userName);


  return (
    <div>
      <h2>{userName ? `${userName}'s Gigs` : "Loading..."}</h2>
      {userName && userGigs.length === 0 && <p>No gigs found for {userName}.</p>}
      {userGigs.map(gig => <GigCard key={gig.id} card={gig} />)}
    </div>
  );
};
export default UserGigs;