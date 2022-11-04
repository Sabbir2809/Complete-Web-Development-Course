import React from 'react';
import './Country.css';

const Country = (props) => {
  return (
    <div className='country-container'>
      <img src={props.logo} alt='' />
      <h3>{props.name}</h3>
      <h4>Region: {props.region}</h4>
      <h5>Capital: {props.capital}</h5>
      <p>Population: {props.population}</p>
    </div>
  );
};

export default Country;
