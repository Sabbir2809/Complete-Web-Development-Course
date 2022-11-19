import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
  return (
    <div>
      {/* Common Header */}
      <Header></Header>
      {/* Changes Outlet */}
      <Outlet />
    </div>
  );
};

export default Main;
