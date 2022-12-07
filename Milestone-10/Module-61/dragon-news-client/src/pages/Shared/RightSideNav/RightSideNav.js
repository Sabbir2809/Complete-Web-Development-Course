import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} className='mb-3' variant='outline-primary'>
          <FaGoogle /> Login with Google
        </Button>
        <Button variant='outline-dark'>
          <FaGithub /> Login With GitHub
        </Button>
      </ButtonGroup>
      <div className='mt-3'>
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className='mb-2'>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className='mb-2'>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className='mb-2'>
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
