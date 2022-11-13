import React from 'react';
import './Cart.css';

const Cart = ({ item, handleAddToList }) => {
  return (
    <div className='card'>
      <img src={item.img} alt='' />
      <div className='info'>
        <h2 className='title'>{item.title}</h2>
        <div>
          <p>{item.info}</p>
          <p>
            <strong>For Age:</strong> {item.age}
          </p>
          <p>
            <strong>Time Required:</strong> {item.time}s
          </p>
        </div>
      </div>
      {/* Add to List Button */}
      <button onClick={() => handleAddToList(item)} className='add-btn'>
        Add to list
      </button>
    </div>
  );
};

export default Cart;
