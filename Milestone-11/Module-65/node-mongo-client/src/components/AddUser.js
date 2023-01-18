import React, { useState } from 'react';

const AddUser = () => {
  //  name: 'default', email: 'default@gmail.com'
  const [user, setUser] = useState({});

  const handleAddUser = (event) => {
    event.preventDefault();
    // console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert('User Added Successfully');
          event.target.reset();
        }
      });
  };

  const handleInputBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    // console.log(value, field);
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
    // console.log(newUser);
  };
  return (
    <div className='form-section'>
      <form onSubmit={handleAddUser}>
        <legend>Please add a new user</legend>
        <input onBlur={handleInputBlur} type='text' name='name' placeholder='name' required />
        <br />
        <input onBlur={handleInputBlur} type='text' name='address' placeholder='address' required />
        <br />
        <input onBlur={handleInputBlur} type='email' name='email' placeholder='email' required />
        <br />
        <button type='submit'>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
