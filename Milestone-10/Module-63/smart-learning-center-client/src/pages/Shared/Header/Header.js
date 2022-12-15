import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className='navbar bg-primary text-primary-content'>
      <div className='navbar-start'>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          Smart Learning Center
        </Link>
      </div>
      <div className='navbar-end hidden lg:flex'>
        <ul className='menu menu-horizontal p-0 mr-5'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/courses'>Courses</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/faq'>FAQ</Link>
          </li>
          {user?.uid ? (
            <>
              <li>
                <Link to='/profile'>{user?.displayName}</Link>
              </li>
              <li>
                <Link onClick={handleLogOut} to='/login'>
                  LogOut
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
            </>
          )}
        </ul>
        <ul>
          <div className='avatar'>
            <Link to='/profile'>
              {user?.photoURL ? (
                <div className='w-10 rounded-3xl'>
                  <img src={user.photoURL} alt='profile' />
                </div>
              ) : (
                <FaUser />
              )}
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
