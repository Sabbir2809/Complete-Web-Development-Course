import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <span>
        <progress className='progress progress-primary w-56' value='0' max='100'></progress>
        <progress className='progress progress-primary w-56' value='10' max='100'></progress>
        <progress className='progress progress-primary w-56' value='40' max='100'></progress>
        <progress className='progress progress-primary w-56' value='70' max='100'></progress>
        <progress className='progress progress-primary w-56' value='100' max='100'></progress>
      </span>
    );
  }
  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
