import React, { useContext, useState } from 'react';
import { Toast } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
  // State
  const { signIn, user, setLoading } = useContext(AuthContext);
  const [error, setError] = useState('');
  // navigate
  const navigate = useNavigate();
  // location
  const location = useLocation();

  // title
  useTitle('Login');

  const from = location.state?.from?.pathname || '/';

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
          Toast.error('Your email address not verified. please verify your email');
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

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type='email' placeholder='Enter email' required />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type='password' placeholder='Password' required />
        <Form.Text className='text-danger'>{error}</Form.Text>
      </Form.Group>

      <Button variant='primary' type='submit'>
        Login
      </Button>
    </Form>
  );
};

export default Login;
