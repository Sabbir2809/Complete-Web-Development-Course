import React, { useEffect } from 'react';

const Counter1 = ({ number }) => {
  // componentDidMount()
  useEffect(() => {
    console.log('Functional Component: Mounting...');
  });

  // componentDidUpdate()
  useEffect(() => {
    console.log('Functional Component: Updating...');

    //componentWillUnmount()
    return () => {
      console.log('Functional Component: Removed');
    };
  }, [number]);

  return (
    <div>
      <h1>{number}</h1>
    </div>
  );
};

export default Counter1;
