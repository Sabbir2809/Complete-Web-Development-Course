import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({ friend }) => {
  const { id, name, username } = friend;
  return (
    <div className='friend'>
      <h2>{name}</h2>
      <h3>
        <Link to={`/friend/${id}`}>{username}</Link>
      </h3>
    </div>
  );
};

export default Friend;
