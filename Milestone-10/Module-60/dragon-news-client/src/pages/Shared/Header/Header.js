import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

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
    <div>
      <Navbar className='mb-5' collapseOnSelect expand='lg' bg='light' variant='light'>
        <Container>
          <Navbar.Brand>
            <Link to='/'>Dragon News</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link>All News</Nav.Link>
              <Nav.Link>Categories</Nav.Link>
            </Nav>
            <div className='d-lg-none'>
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
          <Nav>
            <>
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <Button variant='primary' onClick={handleLogOut}>
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant='warning'>
                    <Link to='/login'>Login</Link>
                  </Button>
                  <Button variant='warning'>
                    <Link to='/register'>Register</Link>
                  </Button>
                </>
              )}
            </>
            <Link to='/profile' eventKey={2}>
              {user?.photoURL ? (
                <Image roundedCircle style={{ height: '40px' }} src={user.photoURL}></Image>
              ) : (
                <FaUser />
              )}
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
