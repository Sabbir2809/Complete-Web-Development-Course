import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import app from '../firebase/firebase.init';
import { Link } from 'react-router-dom';

// get auth
const auth = getAuth(app);

const RegisterReactBootstrap = () => {
  // State
  const [passwordError, setPasswordError] = useState('');
  const [success, setSuccess] = useState(false);

  // form handleRegister
  const handleRegister = (event) => {
    // Page reload off
    event.preventDefault();
    // state
    setSuccess(false);
    // form value extract
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);

    // Validate Password
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
    // state
    setPasswordError('');
    //
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // const user = result.user;
        setSuccess(true);
        // console.log(user);
        form.reset();
        verifyEmail();
        updateUserName(name);
      })
      .catch((error) => {
        console.error('Error: ', error);
        setPasswordError(error.message);
      });
  };
  // Email Verification
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert('Please Check Your Email & Verify Your Email Address');
    });
  };

  // Update User Profile
  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        alert('Display Name Updated');
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  return (
    <div className='w-50 mx-auto m-5'>
      <h3 className='text-primary'>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Label>Your Name</Form.Label>
          <Form.Control type='text' name='name' placeholder='Enter Your Name' required />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Your Email</Form.Label>
          <Form.Control type='email' name='email' placeholder='Enter Your Email' required />
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
      <p>
        <small>
          Already have an Account? Please <Link to='/login'>Login</Link>
        </small>
      </p>
    </div>
  );
};

export default RegisterReactBootstrap;
