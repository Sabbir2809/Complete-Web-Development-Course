import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Statistics = () => {
  const total = useLoaderData();
  const questionTotal = total.data;

  return (
    <div className='statistics-container'>
      <BarChart width={600} height={600} data={questionTotal}>
        <Bar dataKey='total' fill='#3a86ff' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>
    </div>
  );
};

export default Statistics;
