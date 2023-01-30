import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || 'Unregistered';
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price: price,
      customer: name,
      email: email,
      phone: phone,
      message: message,
    };

    // if(phone.length > 10){
    //   alert('Phone Number Should be 10 Characters or longer')
    // }else{

    // }

    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('genius-token')}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          alert('Order Placed Successfully');
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handlePlaceOrder} className='mt-10'>
      <div className=' mb-5'>
        <h2 className='text-4xl'>
          Your are about to order: <span className='text-orange-600'>{title}</span>
        </h2>
        <h4 className='text-3xl'>
          Price: <span className='text-orange-600'>${price}</span>
        </h4>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          className='input input-bordered input-info w-full'
        />
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          className='input input-bordered input-info w-full'
        />
        <input
          type='number'
          name='phone'
          required
          placeholder='Your Phone Number'
          className='input input-bordered input-info w-full'
        />
        <input
          type='text'
          name='email'
          placeholder='Your Email'
          defaultValue={user?.email}
          readOnly
          className='input input-bordered input-info w-full'
        />
      </div>
      <textarea
        name='message'
        className='textarea textarea-info w-full mt-5'
        placeholder='Your Message'></textarea>
      <input type='submit' value='Place Your Order' className='btn btn-info mb-10' />
    </form>
  );
};

export default Checkout;
