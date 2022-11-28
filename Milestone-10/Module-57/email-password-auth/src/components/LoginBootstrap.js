import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

//
const auth = getAuth(app);

const LoginBootstrap = () => {
  //
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  //
  const handleSubmit = (event) => {
    //
    event.preventDefault();
    setSuccess(false);
    //
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    //
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // const user = result.user;
        setSuccess(true);
        // console.log(user);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  //
  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    // console.log(email);
  };

  //
  const handleForgetPassword = () => {
    if (!userEmail) {
      alert('Please Enter Your Email Address');
      return;
    }
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        alert('Password Reset Email Sent. Please Check Your Email Address');
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  return (
    <div className='w-50 mx-auto m-5'>
      <h3 className='text-success'>Please Login</h3>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='formGroupExampleInput' className='form-label'>
            Email
          </label>
          <input
            type='email'
            name='email'
            onBlur={handleEmailBlur}
            className='form-control'
            id='formGroupExampleInput'
            placeholder='Enter Email'
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='formGroupExampleInput2' className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            className='form-control'
            id='formGroupExampleInput2'
            placeholder='Password'
            required
          />
        </div>
        <button className='btn btn-success' type='submit'>
          Login
        </button>
      </form>
      {success && <p>Successfully Login to the Account</p>}
      <p>
        <small>
          New To This Website? Please <Link to='/register'>Register</Link>
        </small>
      </p>
      <p>
        <small>
          Forget Password?
          <button onClick={handleForgetPassword} type='button' className='btn btn-link'>
            Reset Password
          </button>
        </small>
      </p>
    </div>
  );
};

export default LoginBootstrap;
