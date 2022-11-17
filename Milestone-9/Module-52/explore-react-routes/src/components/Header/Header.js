import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav className='header'>
        <Link to='/home'>Home</Link>
        <Link to='/friends'>Friends</Link>
        <Link to='/about'>About</Link>
        <Link to='/footer'>Footer</Link>
        {/* <a href='/home'>Home</a>
      <a href='/about'>About</a> */}
      </nav>
    </div>
  );
};

export default Header;
