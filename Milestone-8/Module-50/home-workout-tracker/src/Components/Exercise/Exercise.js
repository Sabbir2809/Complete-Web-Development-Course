import React from 'react';
import { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../utilities/fakebd';
import './Exercise.css';

const Exercise = () => {
  // useState
  const [data, setData] = useState([]);
  const [addList, setAddList] = useState([]);

  // useEffect
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, []);

  // OnClick Arrow Function
  const handleAddToList = (data) => {
    const newCart = [...addList, data];
    setAddList(newCart);
    addToDb(data.time);
  };

  return (
    <div className='main-container'>
      {/* Card Component */}
      <div className='exercise'>
        {data.map((item) => (
          <Cart key={item.id} item={item} handleAddToList={handleAddToList} />
        ))}
      </div>
      {/* Activity Component */}
      <div>
        <Activity addList={addList} />
      </div>
    </div>
  );
};

export default Exercise;
