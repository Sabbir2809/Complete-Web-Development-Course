import React from 'react';

const Post = (props) => {
  const { id, title, body } = props.post;

  const divContainer = {
    backgroundColor: 'lightgray',
    padding: '10px',
    margin: '10px',
    borderRadius: '10px',
    border: '5px solid lightblue',
  };

  return (
    <div style={divContainer}>
      <p>ID: {id}</p>
      <h2>Title: {title}</h2>
      <h3>Body: {body}</h3>
    </div>
  );
};

export default Post;
