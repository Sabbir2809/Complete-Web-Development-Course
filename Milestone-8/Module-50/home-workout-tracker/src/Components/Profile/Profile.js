import React from 'react';
import profile from '../../Components/asset/profile.png';
import './Profile.css';

const Profile = ({ userInfo }) => {
  return (
    <div>
      {/* User Profile Information */}
      <div className='user-profile'>
        <img className='profile-img' src={profile} alt='' />
        <div className='bio'>
          <h2 className='title'>{userInfo.name}</h2>
          <address>{userInfo.address}</address>
        </div>
      </div>
      {/* User Information */}
      <div className='user-info'>
        <h4>Weight: {userInfo.weight}</h4>
        <h4>Height: {userInfo.height}</h4>
        <h4>Age: {userInfo.age}</h4>
      </div>
    </div>
  );
};

export default Profile;
