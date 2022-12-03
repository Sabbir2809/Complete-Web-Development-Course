import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import band1 from './../../../assets/bands/band1.png';
import band2 from './../../../assets/bands/band2.png';

const BrandCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={band1} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={band2} alt='Second slide' />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
