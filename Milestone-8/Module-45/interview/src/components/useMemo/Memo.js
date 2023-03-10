import React, { useMemo, useState } from 'react';

const Memo = () => {
  const [counterOne, SetCounterOne] = useState(0);
  const [counterTwo, SetCounterTwo] = useState(0);

  const incrementOne = () => {
    SetCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    SetCounterTwo(counterTwo + 1);
  };

  // const isEven = () => {
  //   console.log('...');
  //   let i = 0;
  //   while (i < 2000000000) {
  //     i++;
  //   }
  //   return counterOne % 2 === 0;
  // };

  const isEven = useMemo(() => {
    console.log('...');
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={incrementOne}>counterOne - {counterOne}</button>
      <span>{isEven ? 'Even' : 'Odd'}</span>
      <button onClick={incrementTwo}>counterTwo - {counterTwo}</button>
    </div>
  );
};

export default Memo;
