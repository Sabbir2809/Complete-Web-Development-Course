import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
  const { courseTitle, img, id } = course;
  return (
    <div className='card bg-base-100 shadow-xl image-full m-7'>
      <figure>
        <img src={img} alt='course' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-3xl'>{courseTitle}</h2>
        <div className='card-actions justify-end'></div>
        <Link to={`/courses/${id}`}>
          <button className='btn btn-info'>Course Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Course;
