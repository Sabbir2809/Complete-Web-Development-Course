import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(name, email, photoURL, password);
    createUser(email, password)
      .then(() => {
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='formBasicName'>
        <Form.Label>Your Name</Form.Label>
        <Form.Control type='text' name='name' placeholder='Enter name' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPhoto'>
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type='text' name='photoURL' placeholder='photo URL' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' name='email' placeholder='Enter email' required />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' name='password' placeholder='Password' required />
        <Form.Text className='text-danger'>error</Form.Text>
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default Register;
