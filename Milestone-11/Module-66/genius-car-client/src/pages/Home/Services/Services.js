import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className='text-center mb-5'>
        <p className='text-2xl font-bold text-orange-600 pt-10'>Services</p>
        <h2 className='text-5xl font-semibold'>Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected humour, or randomised{' '}
          <br />
          words which don't look even slightly believable.{' '}
        </p>
      </div>
      <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-6'>
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
