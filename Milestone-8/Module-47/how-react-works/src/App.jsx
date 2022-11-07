import './App.css';
import React from 'react';
import AddList from './components/AddList';
import Modal from './components/Modal';
import { useState } from 'react';

const data = [
  {
    id: 1,
    title: 'I Love HTML',
    startDate: '01-01-2021',
  },
  {
    id: 2,
    title: 'I Love CSS',
    startDate: '10-01-2021',
  },
  {
    id: 3,
    title: 'I Love JavaScript',
    startDate: '20-01-2021',
  },
];

function App() {
  const [list, setList] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    const filterList = list.filter((item) => item.id !== id);
    setList(filterList);
  };

  return (
    <React.Fragment>
      {list.map((item) => (
        <div onClick={() => handleDelete(item.id)} key={item.id} className='card'>
          <h3>{item.title}</h3>
          <p>{item.startDate}</p>
        </div>
      ))}
      <div className='btn-container'>
        <button onClick={(e) => setShowModal(true)}>Add List</button>
      </div>

      {showModal && (
        <Modal>
          <AddList setList={setList} setShowModal={setShowModal} />
          <button onClick={(e) => setShowModal(false)}>Close Modal</button>
        </Modal>
      )}
    </React.Fragment>
  );
}

export default App;
