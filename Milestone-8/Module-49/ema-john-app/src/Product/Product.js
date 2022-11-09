import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, handleAddToCard }) => {
  // const { product, handleAddToCard } = props;
  // const { name, seller, price, ratings, img } = props.product;
  const { name, seller, price, ratings, img } = product;

  return (
    <div className='product'>
      <img src={img} alt='product img' />
      <div className='product-top'>
        <p className='product-name'>{name}</p>
        <div className='product-bottom'>
          <p>Price: ${price}</p>
          <p>
            <small>Seller: {seller}</small>
          </p>
          <p>
            <small>Ratings: {ratings} Stars</small>
          </p>
        </div>
      </div>
      <button onClick={() => handleAddToCard(product)} className='btn-cart'>
        <p>
          Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
        </p>
      </button>
    </div>
  );
};

export default Product;
