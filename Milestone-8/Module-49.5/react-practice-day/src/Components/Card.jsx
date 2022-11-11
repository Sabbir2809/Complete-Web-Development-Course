import React from 'react';

const Card = ({ item }) => {
  return (
    <div className='card'>
      <img src={item.img} alt='Product' />
      <div>
        <p className='title'>{item.title}</p>
        <p className='price'>{item.price}</p>
      </div>
    </div>
  );
};

export default Card;
