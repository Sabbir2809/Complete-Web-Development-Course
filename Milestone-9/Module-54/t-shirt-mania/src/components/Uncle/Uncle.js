import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h2>Uncle Component</h2>
      <p>Money: {money}</p>
    </div>
  );
};

export default Uncle;
