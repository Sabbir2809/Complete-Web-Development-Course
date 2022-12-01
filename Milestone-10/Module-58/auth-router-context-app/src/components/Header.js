import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className='navbar bg-primary text-primary-content'>
      <Link to='/' className='btn btn-ghost normal-case text-xl'>
        Awesome Auth
      </Link>
      <Link to='/' className='btn btn-ghost normal-case text-ml'>
        Home
      </Link>
      <Link to='/login' className='btn btn-ghost normal-case text-ml'>
        Login
      </Link>
      <Link to='/register' className='btn btn-ghost normal-case text-ml'>
        Register
      </Link>
      {user?.email && <span>Hi, {user.email}</span>}
      <button onClick={handleSignOut} className='ml-5 btn-sm btn-warning '>
        Log Out
      </button>
    </div>
  );
};

export default Header;
