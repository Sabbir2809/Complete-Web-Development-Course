import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const AxiosWithRecharts = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone').then((data) => {
      const phonesLoaded = data.data.data;
      const phoneData = phonesLoaded.map((phone) => {
        const parts = phone.slug.split('-');
        const price = parseInt(parts[1]);
        const singlePhone = {
          brand: phone.brand,
          name: phone.phone_name,
          price: price,
        };
        return singlePhone;
      });
      // console.log(phoneData);
      setPhones(phoneData);
    });
  }, []);
  return (
    <div>
      <h3 className='text-2xl '>Axios with Recharts</h3>
      {/* {phones.map((phone) => (
        <p>{phone.phone_name}</p>
      ))} */}

      {/* <BarChart width={600} height={400} data={phones}>
        <Bar dataKey='price' fill='#8884d8' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart> */}

      <LineChart width={600} height={300} data={phones}>
        <Line type='monotone' dataKey='price' stroke='#8884d8' strokeWidth={2} />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default AxiosWithRecharts;
