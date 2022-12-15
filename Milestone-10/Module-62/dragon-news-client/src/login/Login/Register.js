import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Toast } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';

const Register = () => {
  // state
  const { createUser, updatedUserProfile, verifyEmail } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);
  // title
  useTitle('Register');

  // handleSubmit
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

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
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
        <Form.Text className='text-danger'>{error}</Form.Text>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check
          onClick={handleAccepted}
          type='checkbox'
          label={
            <>
              Accept <Link to='/terms'>Terms & Conditions</Link>{' '}
            </>
          }
        />
      </Form.Group>

      <Button variant='primary' type='submit' disabled={!accepted}>
        Register
      </Button>
      <Toast></Toast>
    </Form>
  );
};

export default Register;
