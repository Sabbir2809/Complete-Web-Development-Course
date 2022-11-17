import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
  const friend = useLoaderData();
  // console.log(friend);
  const { email, phone, website } = friend;
  return (
    <div>
      <h3>Friend Details Component</h3>
      <h4>About: {friend.username}</h4>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </div>
  );
};

export default FriendDetails;
