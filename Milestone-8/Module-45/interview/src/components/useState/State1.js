import React, { useState } from 'react';

const State1 = () => {
  const [inputValue, SetInputValue] = useState('Sabbir');
  console.log(inputValue);

  const handleOnChange = (e) => {
    const newValue = e.target.value;
    SetInputValue(newValue);
  };

  return (
    <div>
      <h1>{inputValue}</h1>
      <input onChange={handleOnChange} value={inputValue} type='text' placeholder='Type Somethings...' />
    </div>
  );
};

export default State1;
