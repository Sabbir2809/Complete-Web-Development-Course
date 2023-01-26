import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import './Shop.css';
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {
  // const [products, setProducts] = useState([]);
  const products = useLoaderData();
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  // useEffect(() => {
  //   fetch('products.json')
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];

    for (const id in storedCart) {
      const addedProduct = products.find((product) => product._id === id);

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCard = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product._id !== selectedProduct._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  return (
    <div className='shop-container'>
      <div className='products-container'>
        {products.map((product) => (
          <Product key={product._id} product={product} handleAddToCard={handleAddToCard} />
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart} clearCart={clearCart}>
          <Link to='/orders'>
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
