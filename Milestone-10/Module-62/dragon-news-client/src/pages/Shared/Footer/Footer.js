import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <Navbar className='mb-5' collapseOnSelect expand='lg' bg='light' variant='light'>
      <Container>
        <h4>Copyright</h4>
      </Container>
    </Navbar>
  );
};

export default Footer;
