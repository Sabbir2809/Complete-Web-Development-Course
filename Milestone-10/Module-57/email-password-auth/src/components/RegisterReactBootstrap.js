import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const RegisterReactBootstrap = () => {
  const [passwordError, setPasswordError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPasswordError('Please Provide at Least Tow UpperCase Letter');
      return;
    }
    if (password.length < 6) {
      setPasswordError('Please Should be at least Six Characters');
      return;
    }
    if (!/(?=.*[!@#&*])/.test(password)) {
      setPasswordError('Please Add at Least one Special Character');
      return;
    }

    setPasswordError('');

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setSuccess(true);
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        console.error('Error: ', error);
        setPasswordError(error.message);
      });
  };

  return (
    <div className='w-50 mx-auto m-5'>
      <h3 className='text-primary'>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' name='email' placeholder='Enter email' required />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' name='password' placeholder='Password' required />
        </Form.Group>
        <p className='text-danger'> {passwordError}</p>
        {success && <p className='text-success'>User Created Successfully</p>}
        <Button variant='primary' type='submit'>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterReactBootstrap;
