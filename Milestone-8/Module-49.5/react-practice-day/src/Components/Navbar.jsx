import React from 'react';
import { useState } from 'react';

const Navbar = ({ categoryName, data, setAllData }) => {
  const [cName, setCName] = useState('');

  const handleCategoryName = (name) => {
    setCName(name);
    const filteredData = data.filter((item) => item.category === name);
    if (filteredData.length) {
      setAllData(filteredData);
    } else {
      setAllData(data);
    }
  };

  return (
    <div className='navbar'>
      <div
        onClick={() => handleCategoryName('')}
        style={{ backgroundColor: cName === '' ? 'rgb(28, 164, 155)' : '' }}
        className='item'>
        <p>All</p>
      </div>
      {categoryName.map((name) => (
        <div
          onClick={() => handleCategoryName(name)}
          style={{ backgroundColor: name === cName ? 'rgb(28, 164, 155)' : '' }}
          key={name}
          className='item'>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
