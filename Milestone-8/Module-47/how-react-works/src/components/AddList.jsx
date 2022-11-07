import React from 'react';
import { useState } from 'react';

const AddList = ({ setList, setShowModal }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitedList = {
      title: title,
      startDate: date,
      id: Date.now(),
    };
    setList((preState) => [...preState, submitedList]);
    setShowModal(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Which Programming Language do you Love?</span>
          <input onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Your Title' />
        </label>
        <label>
          <span>When you Learn this thing</span>
          <input onChange={(e) => setDate(e.target.value)} type='date' />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddList;
