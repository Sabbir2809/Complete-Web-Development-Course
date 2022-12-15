import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
  // state
  const { createUser, updatedUserProfile, verifyEmail } = useContext(AuthContext);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    // console.log(name, email, photoURL, password);
    createUser(email, password)
      .then(() => {
        form.reset();
        setError('');
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success('Successfully created!');
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updatedUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className='hero min-h-screen bg-base-200'>
      <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Your Name</span>
            </label>
            <input type='text' name='name' placeholder='name' className='input input-bordered' />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Your Photo URL</span>
            </label>
            <input
              type='text'
              name='photoURL'
              placeholder='photo url'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Your Email</span>
            </label>
            <input
              type='email'
              name='email'
              placeholder='email'
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='password'
              name='password'
              placeholder='password'
              className='input input-bordered'
              required
            />
            <label className='label text-amber-400'>{error}</label>
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-primary'>Register</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
