import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <React.Fragment>
      <nav className='navbar'>
        <h3 className='logo'>Hero Quizizz App</h3>
        <ul
          className={isMobile ? 'nav-links-mobile' : 'nav-links'}
          onClick={() => setIsMobile(false)}>
          <Link to='/' className='topics'>
            <li>Topics</li>
          </Link>
          <Link to='/statistics' className='statistics'>
            <li>Statistics</li>
          </Link>
          <Link to='/blog' className='blog'>
            <li>Blog</li>
          </Link>
          <Link to='/about' className='about'>
            <li>About</li>
          </Link>
        </ul>
        <button onClick={() => setIsMobile(!isMobile)} className='mobile-menu-icon'>
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
