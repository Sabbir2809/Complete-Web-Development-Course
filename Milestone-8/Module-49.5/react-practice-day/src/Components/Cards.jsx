import React from 'react';
import Card from './Card';

const Cards = ({ data }) => {
  return (
    <div className='cards'>
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cards;
