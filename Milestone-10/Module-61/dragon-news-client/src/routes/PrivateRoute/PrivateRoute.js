import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <span>
        <Spinner animation='grow' variant='primary' />
        <Spinner animation='grow' variant='secondary' />
        <Spinner animation='grow' variant='success' />
        <Spinner animation='grow' variant='danger' />
        <Spinner animation='grow' variant='warning' />
      </span>
    );
  }

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
