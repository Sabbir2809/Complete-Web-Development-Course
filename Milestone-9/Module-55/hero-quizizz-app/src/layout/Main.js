import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      {/* NavBar Common Component */}
      <NavBar></NavBar>

      {/* Frequently Changes Outlet  */}
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
