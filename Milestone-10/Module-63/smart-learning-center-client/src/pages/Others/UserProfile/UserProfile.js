import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const photoURLRef = useRef(user?.photoURL);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(photoURLRef.current.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <div className='avatar'>
        <div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
          <img src={user?.photoURL} alt='Profile' />
        </div>
        <h1 className='text-2xl'>{user?.displayName}</h1>
      </div>
      <form onSubmit={handleSubmit} className='hero min-h-screen bg-base-200'>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Your Name</span>
              </label>
              <input
                type='text'
                name='name'
                onChange={handleNameChange}
                defaultValue={name}
                placeholder='name'
                className='input input-bordered'
              />
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
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Update Information</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
