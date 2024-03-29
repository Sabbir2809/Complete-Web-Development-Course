import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure, you want to cancel this order?');
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Deleted Successfully');
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'Approved' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = 'Approved';
          const newOrders = [...remaining, approving];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div className='overflow-x-auto w-full'>
      <table className='table w-full mb-10 mt-10'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Service & Price</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderRow
              key={order._id}
              order={order}
              handleDelete={handleDelete}
              handleStatusUpdate={handleStatusUpdate}></OrderRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
