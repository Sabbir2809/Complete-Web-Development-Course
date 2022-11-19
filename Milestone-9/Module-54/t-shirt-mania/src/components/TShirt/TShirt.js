import React from 'react';
import './TShirt.css';

const TShirt = ({ tShirt, handleAddToCart }) => {
  const { name, price, picture } = tShirt;
  return (
    <div className='t-shirt'>
      <img src={picture} alt='' />
      <div>
        <h2>{name}</h2>
        <h4>Price: ${price}</h4>
        <button onClick={() => handleAddToCart(tShirt)} className='btn-buy'>
          Buy This
        </button>
      </div>
    </div>
  );
};

export default TShirt;
