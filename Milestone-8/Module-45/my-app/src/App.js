import './App.css';
import { useState, useEffect } from 'react';
function App() {
  return (
    <div className='App'>
      <Counter />
      <ExternalUsers />
    </div>
  );
}
// Counter Function
function Counter() {
  // State
  const [count, setCount] = useState(0);
  // Decrement onClick Function
  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  // Increment onClick Function
  const handleIncrement = () => setCount(count + 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleDecrement}> - </button>
      <button onClick={handleIncrement}> + </button>
    </div>
  );
}

const ExternalUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className='users-container'>
      <h1>External Users</h1>
      <p>{users.length}</p>
      {users.map((user) => (
        <User id={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
};

function User(props) {
  return (
    <div className='user-container'>
      <h3>{props.id}</h3>
      <h4>{props.name}</h4>
      <p>{props.email}</p>
    </div>
  );
}

export default App;
