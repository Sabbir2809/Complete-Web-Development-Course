import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please Buy at Least One Item!!!</p>;
  } else {
    message = <p>Thanks for Buying</p>;
  }
  return (
    <div>
      <h2>Order Summery</h2>
      <h4 className={`bold ${cart.length === 0 ? `red` : `green`}`}>
        Oder Quantity: {cart.length}
      </h4>
      {cart.map((tShirt) => (
        <p key={tShirt._id}>
          {tShirt.name} <button onClick={() => handleRemoveItem(tShirt)}> X</button>
        </p>
      ))}
      {message}
      {cart.length === 3 ? <p>More</p> : <p> Continue</p>}
      {cart.length === 2 && <h2>Double Items</h2>}
    </div>
  );
};

export default Cart;
