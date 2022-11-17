import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav className='header'>
        <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to='/home'>
          Home
        </NavLink>
        <NavLink to='/friends'>Friends</NavLink>
        <NavLink to='/posts'>Post</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/footer'>Footer</NavLink>
        {/* <a href='/home'>Home</a>
      <a href='/about'>About</a> */}
      </nav>
    </div>
  );
};

export default Header;
