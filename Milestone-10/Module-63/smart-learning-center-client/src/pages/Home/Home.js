import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Home = () => {
  const { id } = useContext(AuthContext);
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/office-work-school-education-man-writing-chart-board-woman-designer-drawing-graphic-tablet-teacher-stand-knee-giving-book-little-girl-with-schoolbag_33099-2516.jpg?w=1380&t=st=1670851831~exp=1670852431~hmac=d26f94a831410171e267f5605f3f002e27959a0e3243f256eac92a5ef3a19eb7")`,
      }}>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-xl'>
          <h1 className='mb-5 text-5xl text-white font-bold'>Smart Learning Center</h1>
          <p className='mb-5 text-lg text-white'>
            the use of interactive features of e-learning increases the motivation of undergraduate
            students for the learning process.
          </p>
          <Link to={`/courses/${id}`}>
            <button className='btn btn-primary'>Course Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
