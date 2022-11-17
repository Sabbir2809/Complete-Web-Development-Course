import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetails.css';

const FriendDetails = () => {
  const friend = useLoaderData();
  // console.log(friend);
  const { email, phone, website, address } = friend;
  return (
    <div className='details'>
      <h3>Friend Details Component</h3>
      <h4>About: {friend.username}</h4>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <p>{address.city}</p>
    </div>
  );
};

export default FriendDetails;
