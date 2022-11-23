import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ topic }) => {
  // De-structuring Object
  const { id, logo, name, total } = topic;

  // Dynamic Navigation
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/quiz/${id}`);
  };

  return (
    <div className='flex-box'>
      <div className='card'>
        <img src={logo} alt={name} />
        <h2>{name}</h2>
        <h4>Total Question: {total}</h4>
        <button className='start-btn' onClick={handleNavigate}>
          Start Practice
        </button>
      </div>
    </div>
  );
};

export default Card;
