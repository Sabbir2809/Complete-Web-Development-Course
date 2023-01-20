import React from 'react';
import bannar1 from './../../../assets/images/banner/1.jpg';
import bannar2 from './../../../assets/images/banner/2.jpg';
import bannar3 from './../../../assets/images/banner/3.jpg';
import bannar4 from './../../../assets/images/banner/4.jpg';
import bannar5 from './../../../assets/images/banner/5.jpg';
import bannar6 from './../../../assets/images/banner/6.jpg';

const Banner = () => {
  return (
    <div className='carousel w-full'>
      <div id='slide1' className='carousel-item relative w-full'>
        <img src={bannar1} className='w-full' alt='banner1' />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide4' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide2' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide2' className='carousel-item relative w-full'>
        <img src={bannar2} className='w-full' alt='banner2' />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide1' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide3' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide3' className='carousel-item relative w-full'>
        <img src={bannar3} className='w-full' alt='banner3' />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide2' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide4' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide4' className='carousel-item relative w-full'>
        <img src={bannar4} className='w-full' alt='banner4' />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide3' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide1' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
