import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';
import Card from '../Card/Card';

const Topics = () => {
  const loadTopics = useLoaderData();
  const data = loadTopics.data;

  return (
    <div>
      <HeroSection></HeroSection>
      <div className='flex-box'>
        {data.map((topic) => (
          <Card key={topic.id} topic={topic}></Card>
        ))}
      </div>
    </div>
  );
};

export default Topics;
