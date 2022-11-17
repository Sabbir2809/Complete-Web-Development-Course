import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
  const post = useLoaderData();

  const { userId, title, body } = post;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/friend/${userId}`);
  };
  // console.log(post);
  return (
    <div className='detail'>
      <h2>Post Details </h2>
      <p>UserId: {userId}</p>
      <h3>Title: {title}</h3>
      <p>
        Post: <small>{body}</small>
      </p>
      <button onClick={handleNavigate}>Get The Author</button>
    </div>
  );
};

export default PostDetails;
