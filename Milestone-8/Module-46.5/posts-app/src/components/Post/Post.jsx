import React from 'react';
import { useState } from 'react';

const Post = (props) => {
  const { id, title, body } = props.post;

  const [power, setPower] = useState(1);

  const boostPower = () => {
    const newPower = power * 8;
    setPower(newPower);
  };

  const divContainer = {
    backgroundColor: 'lightgray',
    padding: '10px',
    margin: '10px',
    borderRadius: '10px',
    border: '5px solid lightblue',
  };

  return (
    <div style={divContainer}>
      <h1>Power: {power}</h1>
      <button onClick={boostPower}>Power</button>
      <p>ID: {id}</p>
      <h2>Title: {title}</h2>
      <h3>Body: {body}</h3>
    </div>
  );
};

export default Post;
