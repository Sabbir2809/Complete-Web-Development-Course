import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import loginSVG from './../../assets/images/login/login.svg';

const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);

        const currentUser = {
          email: user?.email,
        };
        // console.log(currentUser);
        // get JWT Token
        fetch('http://localhost:5000/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            // local storage is the easiest but not the best to store JWT Token
            localStorage.setItem('genius-token', data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className='hero w-full my-20'>
      <div className='hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row'>
        <div className='text-center lg:text-left'>
          <img className='w-3/4' src={loginSVG} alt='' />
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20'>
          <h1 className='text-4xl text-center font-bold'>Login</h1>
          <form onSubmit={handleLogin} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                name='email'
                placeholder='email'
                className='input input-bordered'
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
              />
              <label className='label'>
                <Link href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className='form-control mt-6'>
              <input className='btn btn-error' type='submit' value='Login' />
            </div>
          </form>
          <p className='text-center'>
            New to Genius Car{' '}
            <Link to='/signup' className='text-orange-600 font-bold'>
              Sign Up
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
