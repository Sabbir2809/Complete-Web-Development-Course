import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {

  const quiz = useLoaderData();
  const quizInfo = quiz.data.questions;

  return (
    <div>
      {quizInfo.map((question) => (
        <QuizDetails key={question.id} question={question}></QuizDetails>
      ))}
    </div>
  );
};

export default Quiz;
