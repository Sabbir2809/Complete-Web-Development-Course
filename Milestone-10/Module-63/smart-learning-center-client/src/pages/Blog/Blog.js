import React from 'react';

const Blog = ({ blog }) => {
  const { blogTitle, blogDescription } = blog;
  return (
    <div className='card w-100 bg-neutral text-primary-content m-5'>
      <div className='card-body'>
        <h2 className='card-title text-3xl text-primary'>{blogTitle}</h2>
        <p>{blogDescription}</p>
      </div>
    </div>
  );
};

export default Blog;
