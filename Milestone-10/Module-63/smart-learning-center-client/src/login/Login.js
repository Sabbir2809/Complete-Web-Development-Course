import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { signIn, providerLogin, setLoading, user } = useContext(AuthContext);
  const [error, setError] = useState('');
  // navigate
  const navigate = useNavigate();
  // location
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  // provider
  const googleProvider = new GoogleAuthProvider();
  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    signIn(email, password)
      .then(() => {
        form.reset();
        setError('');
        // navigate('/');
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error('Your email address not verified. please verify your email');
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
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
            <button className='btn btn-primary'>Login</button>
          </div>
          <div className='form-control mt-6'>
            <button onClick={handleGoogleSignIn} className='btn btn-outline btn-success'>
              <FaGoogle className='text-warning mr-2' /> Login with Google
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
