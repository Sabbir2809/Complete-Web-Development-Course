import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    // console.log(user);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    form.reset();
  };

  return (
    <div className='App'>
      <form onSubmit={handleAddUser}>
        <input type='text' name='name' placeholder='Enter Your Name' />
        <br />
        <input type='email' name='email' placeholder='Enter Your Email' />
        <br />
        <input type='submit' value='Add User' />
      </form>
      <h2>{users.length}</h2>
      {users.map((user) => (
        <p key={user.id}>
          {user.name} {user.email}
        </p>
      ))}
    </div>
  );
}

export default App;
