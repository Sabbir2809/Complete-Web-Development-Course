import React from 'react';

const FAQ = () => {
  return (
    <div tabIndex={0} className='collapse group m-5 p-5'>
      <div className='collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content'>
        Focus me to see content
      </div>
      <div className='collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content'>
        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
      </div>
    </div>
  );
};

export default FAQ;
