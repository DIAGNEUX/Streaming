import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuizData from '../data/Quizdata';
import sad from "../assets/sad.png";
import happy from "../assets/happy.png";
import ConfettiGenerator from "confetti-js";
import { Link } from 'react-router-dom';

export const Question_Quiz = () => {
  const { QuizTitre } = useParams();
  const quizs = QuizData[QuizTitre];
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [isQuizFinished, setIsQuizFinished] = useState(false); 
  const [score, setScore] = useState(0);
  const [nbr_question , Setnbr_question] = useState([])
  const MAX_SCORE = Object.keys(quizs).length;
  const Pasable =  4;
  const bien = MAX_SCORE - 3 ;
  const tres_bien = MAX_SCORE - 2;
  const Felicitation = MAX_SCORE ; 

  const handleNextQuestion = () => {
    if (questionIndex < Object.keys(quizs).length - 1) {
      setQuestionIndex(questionIndex + 1);
      setIsAnswerSubmitted(false);
      setSelectedOption(null);
      setIsAnswerCorrect(null);
    } else {
      setIsQuizFinished(true); 
    }
  };

  const handleAnswerSubmit = (selectedOption) => {
    const QuestionActuelle = quizs[Object.keys(quizs)[questionIndex]];

    if (selectedOption === QuestionActuelle.reponse) {
      setIsAnswerSubmitted(true);
      setIsAnswerCorrect(true);
      setScore(score + 1);
    } else {
      setIsAnswerSubmitted(true);
      setIsAnswerCorrect(false);
    }

    setSelectedOption(selectedOption);
  };

  useEffect(() => {
    const confettiSettings = { target: 'my-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);

    if (isQuizFinished && score === MAX_SCORE ) {
      confetti.render();
    }

    return () => confetti.clear();
  }, [isQuizFinished, score]);
  const handleRelance = () => {
    window.location.reload();
  };

  const NbrQuestion = questionIndex + 1;
  const QuestionRestant = MAX_SCORE - NbrQuestion;


  

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
        <>
        
         <div className='give_result'>
            <div className="in_give_result">

        <div className='in_give_result_score'>
              {score >= tres_bien ? (
                 <div>
                 <img src={happy} alt="" />
                 <h1>Felicitation ! </h1>
             </div>
              ) : score >= bien ? (
                <div>
                    <img src={happy} alt="" />
                <h1>Bien</h1>
                </div>
              ) : score >= Pasable ? (
                <div>
                    <img src={sad} alt="" />
                <h1>Passable</h1>
                </div>
              ) :(
                <div>
                    <img src={sad} alt="" />
                <h1>Oups ! </h1>
                </div>
              )}
              
       <div className='score'>
        <div>
        <p>Votre score est de : </p>
        <h1> {score} / {MAX_SCORE}</h1>
        <div className='btn_score'>
            <button onClick={handleRelance}>Recommencer</button>
            <button><Link to="/Quiz">Autres Quiz</Link></button>
        </div>
        </div>
        </div>
        </div>
        </div>
              </div>
        </>

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
                    
                  </div>
                
              ) : (
                <div>
                    <p className='nombrereponse'> {NbrQuestion} / {MAX_SCORE}</p>
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
