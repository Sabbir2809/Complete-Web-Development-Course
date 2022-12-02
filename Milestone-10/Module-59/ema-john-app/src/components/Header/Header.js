import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from './../../images/Logo.svg';
import './Header.css';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className='header'>
      <img src={logo} alt='logo' />
      <div>
        <Link to='/'>Shop</Link>
        <Link to='/orders'>Orders</Link>
        <Link to='/inventory'>Inventory</Link>
        <Link to='./about'>About</Link>
        {user?.uid ? (
          <button onClick={logOut} className='btn-logout'>
            Log Out
          </button>
        ) : (
          <>
            <Link to='./login' className='btn-logout'>
              Login
            </Link>
            <Link to='./signup' className='btn-logout'>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
