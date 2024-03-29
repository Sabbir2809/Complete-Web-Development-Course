import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';

const ServiceCard = ({ service }) => {
  const { _id, img, price, title } = service;
  return (
    <div className='card card-compact w-96 bg-base-100 shadow-xl mb-10'>
      <figure>
        <img src={img} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className='text-xl text-orange-600 font-semibold'>Price: ${price}</p>
        <div className='card-actions justify-end'>
          <Link to={`/checkout/${_id}`}>
            <ArrowSmallRightIcon className='text-orange-600 w-6'></ArrowSmallRightIcon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
