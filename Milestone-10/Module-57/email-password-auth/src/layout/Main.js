import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <h2 className='text-center text-warning bg-dark p-2'>My Email Password Authentication</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
