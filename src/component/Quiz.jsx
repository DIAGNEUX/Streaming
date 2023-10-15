import React, { useState } from 'react';
import Navbar from './Navbar';
import QuizData from '../data/Quizdata';
import '../css/Quiz.css';

export const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [nextButton, setNextButton] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleNextQuestion = () => {
    if (questionIndex < QuizData.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setNextButton(false);
    } else {
      setShowResult(true);
    }
  };

  const handleShowNextButton = () => {
    if (questionIndex < QuizData.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setNextButton(false);
    } else {
      setShowResult(true);
    }
  };

  const handleAnswerSelect = (selectedOption) => {
    setUserAnswers([...userAnswers, { question: QuizData[questionIndex].question, selectedOption }]);
    setNextButton(true);
  };

  return (
    <div>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="Wrap_Quiz">
        <div className='Quiz'>
          <div className='center_quiz'>
            {showResult ? (
              <div>
                <h3>Résultat du quiz :</h3>
                <ul>
                  {userAnswers.map((answer, index) => (
                    <li key={index}>
                      <strong>{answer.question}</strong>: {answer.selectedOption}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <h3>Question {questionIndex + 1}:</h3>
                {QuizData[questionIndex].image && (
                  <div className='wrap_image_actor'>
                    <img className='image_actor' src={QuizData[questionIndex].image} alt="" />
                  </div>
                )}
                <h3>{QuizData[questionIndex].question}</h3>
                <ul>
                  {QuizData[questionIndex].options.map((option, index) => (
                    <label key={index} className="option">
                      <input
                        type="radio"
                        value={option}
                        name="answer"
                        onChange={() => handleAnswerSelect(option)}
                      />
                      {option}
                    </label>
                  ))}
                </ul>
                <div className='btns_next'>
                  {nextButton ? (
                    <button className='btn_passer' onClick={handleNextQuestion}>Passer à la question suivante</button>
                  ) : (
                    <button className='btn_vraiment' onClick={handleShowNextButton}>Passer</button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
