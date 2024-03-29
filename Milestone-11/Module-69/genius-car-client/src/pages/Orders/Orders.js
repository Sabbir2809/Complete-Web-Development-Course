import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('genius-token')}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setOrder(data);
      });
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure, you want to cancel this order?');
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem('genius-token')}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            alert('Deleted Successfully');
            const remaining = order.filter((odr) => odr._id !== id);
            setOrder(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('genius-token')}`,
      },
      body: JSON.stringify({ status: 'Approved' }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = order.filter((odr) => odr._id !== id);
          const approving = order.find((odr) => odr._id === id);

          approving.status = 'Approved';
          const newOrder = [...remaining, approving];
          setOrder(newOrder);
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
          {order.map((order) => (
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
