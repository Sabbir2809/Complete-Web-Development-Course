import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ ring }) => {
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h5>Special Component</h5>
      <p>
        Gift: <small>{house}</small>
      </p>
      <button onClick={() => setHouse(house + 1)}>Increase</button>
    </div>
  );
};

export default Special;
