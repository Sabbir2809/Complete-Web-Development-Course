import React from 'react';
import './BreakTime.css';

const BreakTime = ({ item, handleBreakTime }) => {
  return (
    <React.Fragment>
      <h4 onClick={() => handleBreakTime(item)} key={item}>
        {item}
      </h4>
    </React.Fragment>
  );
};

export default BreakTime;
