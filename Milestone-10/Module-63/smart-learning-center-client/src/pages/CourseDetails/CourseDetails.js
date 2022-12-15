import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const courses = useLoaderData();
  const { courseTitle, description, img } = courses;
  return (
    <div className='card bg-base-100 shadow-xl m-5'>
      <div className='card-body flex flex-row'>
        <img src={img} alt='course' className='max-w-sm rounded-lg shadow-2xl' />
        <div>
          <h1 className='text-3xl font-bold'>{courseTitle}</h1>
          <p className='py-6'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
