import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/orders'>Orders</Link>
      <Link to='/grandpa'>Grandpa</Link>
    </nav>
  );
};

export default Header;
