import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {
  const posts = useLoaderData();
  // console.log(posts);
  return (
    <div className='posts'>
      {/* <h4>Post Component: {posts.length}</h4> */}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
