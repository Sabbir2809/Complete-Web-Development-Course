import React from 'react';
import './Country.css';

const Country = (props) => {
  const { name, region, capital, population, flags } = props.country;
  return (
    <div className='country-container'>
      <img src={flags.png} alt='' />
      <h3>{name.common}</h3>
      <h4>Region: {region}</h4>
      <h5>Capital: {capital}</h5>
      <p>Population: {population}</p>
    </div>
  );
};

export default Country;
