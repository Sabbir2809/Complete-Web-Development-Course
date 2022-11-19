import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (id) => {
    const remainingItem = cart.filter((product) => product.id !== id);
    setCart(remainingItem);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className='shop-container'>
      <div className='orders-container'>
        {cart.map((product) => (
          <ReviewItem key={product.id} product={product} handleRemoveItem={handleRemoveItem} />
        ))}
        {cart.length === 0 && (
          <h2>
            No Items for Review. Please <Link to='/'>Shop More!</Link>
          </h2>
        )}
      </div>
      <div className='cart-container'>
        <Cart cart={cart} clearCart={clearCart} />
      </div>
    </div>
  );
};

export default Orders;
