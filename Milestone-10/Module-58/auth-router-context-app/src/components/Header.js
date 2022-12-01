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
      <Link to='/register' className='btn btn-ghost normal-case text-ml'>
        Register
      </Link>
      <Link to='/orders' className='btn btn-ghost normal-case text-ml'>
        Orders
      </Link>
      {user?.email && <span>Hi, {user.email}</span>}
      {user?.email ? (
        <button onClick={handleSignOut} className='ml-5 btn-sm btn-warning '>
          Log Out
        </button>
      ) : (
        <Link to='/login'>
          <button className='ml-5 btn-sm btn-warning '>Login</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
