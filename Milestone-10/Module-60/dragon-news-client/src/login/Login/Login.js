import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
  // State
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState('');
  // navigate
  const navigate = useNavigate();
  // location
  const location = useLocation();

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
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
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
        Submit
      </Button>
    </Form>
  );
};

export default Login;
