import React from 'react';
import './Cart.css';

const Cart = ({ cart, clearCart, children }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));

  const grandTotal = total + shipping + tax;
  return (
    <div className='cart'>
      <h2>Order summery</h2>
      <div className='cart-info'>
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total} </p>
        <p>Total Shipping: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <p>
          <strong>Grand Total: ${grandTotal.toFixed(2)}</strong>
        </p>
        {/* <p>
          <button onClick={clearCart}>Clear Cart</button>
        </p> */}
        {children}
      </div>
    </div>
  );
};

export default Cart;