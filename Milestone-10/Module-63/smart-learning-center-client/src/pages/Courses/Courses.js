import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link to={`/courses/1`}>Computer Science</Link>
            </li>
            <li>
              <Link to={`/courses/2`}>Data Structures</Link>
            </li>
            <li>
              <Link to={`/courses/3`}>Algorithms</Link>
            </li>
            <li>
              <Link to={`/courses/4`}>OOP</Link>
            </li>
            <li>
              <Link to={`/courses/5`}>Operating Systems</Link>
            </li>
            <li>
              <Link to={`/courses/6`}>Artificial Intelligence </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-3'>
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
