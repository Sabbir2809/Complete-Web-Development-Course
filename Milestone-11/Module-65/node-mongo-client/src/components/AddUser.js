import React, { useState } from 'react';

const AddUser = () => {
  const [user, setUser] = useState({ name: 'default', email: 'default@gmail.com' });

  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(user);
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
    <div>
      <h2>Please Add a New User: </h2>
      <form onSubmit={handleAddUser}>
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
