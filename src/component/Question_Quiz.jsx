import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuizData from '../data/Quizdata';
import sad from "../assets/sad.png";
import happy from "../assets/happy.png";
import ConfettiGenerator from "confetti-js";

export const Question_Quiz = () => {
  const { QuizTitre } = useParams();
  const quizs = QuizData[QuizTitre];
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [isQuizFinished, setIsQuizFinished] = useState(false); // Ajout de l'état pour suivre si le quiz est terminé
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    if (questionIndex < Object.keys(quizs).length - 1) {
      setQuestionIndex(questionIndex + 1);
      setIsAnswerSubmitted(false);
      setSelectedOption(null);
      setIsAnswerCorrect(null);
    } else {
      setIsQuizFinished(true); // Marquer le quiz comme terminé
    }
  };

  const handleAnswerSubmit = (selectedOption) => {
    const currentQuestion = quizs[Object.keys(quizs)[questionIndex]];

    if (selectedOption === currentQuestion.reponse) {
      setIsAnswerSubmitted(true);
      setIsAnswerCorrect(true);
      setScore(score + 1);
    } else {
      setIsAnswerSubmitted(true);
      setIsAnswerCorrect(false);
    }

    setSelectedOption(selectedOption);
  };

  const MAX_SCORE = Object.keys(quizs).length
  useEffect(() => {
    const confettiSettings = { target: 'my-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);

    if (isQuizFinished && score === MAX_SCORE) {
      confetti.render();
    }

    return () => confetti.clear();
  }, [isQuizFinished, score]);

  return (
    <>
    <canvas id="my-canvas"></canvas>
    <div className='wrap_questionQuiz'>
      <div className='left_questions'>
        {Object.keys(quizs).slice(0, 1).map((quiz, index) => (
          <div key={index}>
            <img src={quizs[quiz].img} alt="" />
            <div className='howwell'>
            </div>
          </div>
        ))}
      </div>

      <div className='right_questions'>
      {isQuizFinished ? ( 
        <div>
        <>
        <h1>Felicitation !</h1>
        <p>Résultat : {score} / {Object.keys(quizs).length}</p>
        </>
      </div>
         ):( 
        <div className="in_right_questions">
            
          <div className='resultat_word'>
            {isAnswerSubmitted ? (
              isAnswerCorrect === true ? (
                <div className='greenboxshadow'>
                  <img src={happy} alt="" />
                </div>
              ) : isAnswerCorrect === false ? (
                <div className='redboxshadow'>
                  <img src={sad} alt="" />
                </div>
              ) : null
            ) : ("")}
          </div> 
         
            <div>
              {isQuizFinished ? (
                <div>
                    <>
                    <p>C'est fini !</p>
                    <p>Résultat : {score} / {Object.keys(quizs).length}</p>
                    </>
                  </div>
                
              ) : (
                <div>
                  <h1>{quizs[Object.keys(quizs)[questionIndex]].question}</h1>
                  <form action="">
                    {quizs[Object.keys(quizs)[questionIndex]].options.map((option, index) => (
                      <label
                        key={index}
                        className={`option 
                          ${isAnswerCorrect === true && option === quizs[Object.keys(quizs)[questionIndex]].reponse ? 'correct' : ''}
                          ${isAnswerCorrect === false && option === selectedOption ? 'incorrect' : ''}
                          ${isAnswerCorrect === false && option === quizs[Object.keys(quizs)[questionIndex]].reponse ? 'correct' : ''}
                        `}
                      >
                        <input
                          type="radio"
                          value={option}
                          name="answer"
                          disabled={isAnswerSubmitted}
                          checked={selectedOption === option}
                          onClick={() => handleAnswerSubmit(option)}
                        />
                        {option}
                      </label>
                    ))}
                  </form>
                </div>
              )}
              <div className='btns_next'>
                {isQuizFinished ? null : (
                  <button className='btn_passer' onClick={handleNextQuestion}>Passer à la question suivante</button>
                )}
              </div>
            </div>
         
        </div>
        )  }
      </div>
    </div>
    </>
  );
};
