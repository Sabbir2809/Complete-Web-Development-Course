import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className='post'>
      <h4>TItle: {title}</h4>
      {/* <Link to={`/post/${id}`}>Vist{id}</Link> */}
      {/* <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link> */}
      <button onClick={handleNavigate}>Show</button>
    </div>
  );
};

export default Post;
