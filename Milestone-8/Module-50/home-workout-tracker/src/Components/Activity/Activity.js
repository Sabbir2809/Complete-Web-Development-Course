import React, { useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import Profile from '../Profile/Profile';
import './Activity.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// User Information
const userInfo = {
  name: 'Sabbir Hossain',
  address: 'Savar, Dhaka',
  weight: 50,
  height: 5.6,
  age: 23,
  breakTime: [15, 30, 45, 55, 60],
};

const Activity = ({ addList }) => {
  const [breakTime, setBreakTime] = useState(0);

  // Exercise Time Calculation
  let exerciseTime = 0;
  for (let add of addList) {
    exerciseTime = exerciseTime + add.time;
  }

  // BreakTime Function
  const handleBreakTime = (breakTime) => {
    setBreakTime(breakTime);
  };

  // Toast Function
  const activityCompleted = () => {
    toast('Wow! Activity Completed');
  };

  return (
    <div className='activity'>
      <Profile userInfo={userInfo} />
      <div className='break-container'>
        <h3>Add a Break</h3>
        {/* BreakTime Component */}
        <div className='break-time'>
          {userInfo.breakTime.map((item) => (
            <BreakTime handleBreakTime={handleBreakTime} key={item} item={item} />
          ))}
        </div>
      </div>

      {/* Exercise Details */}
      <div className='exercise-details'>
        <h3>Exercise Details</h3>
        <h2 className='title'>Exercise Time: {exerciseTime}s</h2>
        <h2 className='title'>Break Time: {breakTime}s</h2>
      </div>

      {/* Activity Completed Button */}
      <button onClick={() => activityCompleted()} className='add-btn'>
        Activity Completed
      </button>

      {/* Toast */}
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
};

export default Activity;
