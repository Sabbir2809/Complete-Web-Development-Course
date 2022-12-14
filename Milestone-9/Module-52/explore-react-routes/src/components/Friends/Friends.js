import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = () => {
  const friends = useLoaderData();
  // console.log(friends);
  return (
    <div className='friends'>
      {/* <h3>Friends Component: {friends.length}</h3> */}
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default Friends;
