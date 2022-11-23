import React from 'react';
import './QuizDetails.css';
import { FaEye } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizDetails = ({ question }) => {
  // Data Modify
  const q = question.question;
  const problem = q.slice(3, -4);
  const options = question.options;

  // Toast Message
  const notify = () => {
    toast.success(`${question.correctAnswer}`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  // Option Right Wong Check Condition
  const handleOption = (option) => {
    if (option === question.correctAnswer) {
      toast.success('Current Answer', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      toast.warn('Wong Answer!', {
        position: 'top-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  return (
    <div className='quiz-details'>
      <div className='question-details'>
        <FaEye onClick={notify} className='eye-icon'></FaEye>
        <h3 className='quiz-title'> - {problem}</h3>
        <div>
          {options.map((option, index) => (
            <button onClick={() => handleOption(option)} key={index} className='css-button-3d--sky'>
              {option}
            </button>
          ))}
        </div>
      </div>
      {/* Toast */}
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
};

export default QuizDetails;
