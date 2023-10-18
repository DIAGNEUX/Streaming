// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import QuizData from '../data/Quizdata';
// import '../css/Quiz.css';

// export const Quiz = () => {
//   const [questionIndex, setQuestionIndex] = useState(0);
//   const [nextButton, setNextButton] = useState(false);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [showResult, setShowResult] = useState(false);

//   const handleNextQuestion = () => {
//     if (questionIndex < QuizData.length - 1) {
//       setQuestionIndex(questionIndex + 1);
//       setNextButton(false);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const handleShowNextButton = () => {
//     if (questionIndex < QuizData.length - 1) {
//       setQuestionIndex(questionIndex + 1);
//       setNextButton(false);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const handleAnswerSelect = (selectedOption) => {
//     setUserAnswers([...userAnswers, { question: QuizData[questionIndex].question, selectedOption }]);
//     setNextButton(true);
//   };

//   return (
//     <div>
//       <div className="Wrap_Quiz">
//         <div className='Quiz'>
//           <div className='center_quiz'>
//             {showResult ? (
//               <div>
//                 <h3>Résultat du quiz :</h3>
//                 <ul>
//                   {userAnswers.map((answer, index) => (
//                     <li key={index}>
//                       <strong>{answer.question}</strong>: {answer.selectedOption}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ) : (
//               <div>
//                 <h3>Question {questionIndex + 1}:</h3>
//                 {QuizData[questionIndex].image && (
//                   <div className='wrap_image_actor'>
//                     <img className='image_actor' src={QuizData[questionIndex].image} alt="" />
//                   </div>
//                 )}
//                 <h3>{QuizData[questionIndex].question}</h3>
//                 <ul>
//                   {QuizData[questionIndex].options.map((option, index) => (
//                     <label key={index} className="option">
//                       <input
//                         type="radio"
//                         value={option}
//                         name="answer"
//                         onChange={() => handleAnswerSelect(option)}
//                       />
//                       {option}
//                     </label>
//                   ))}
//                 </ul>
//                 <div className='btns_next'>
//                   {nextButton ? (
//                     <button className='btn_passer' onClick={handleNextQuestion}>Passer à la question suivante</button>
//                   ) : (
//                     <button className='btn_vraiment' onClick={handleShowNextButton}>Passer</button>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// *{
//   padding: 0;
//   margin: 0;
// }
// .Wrap_Quiz{
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
// .Quiz{
//   width: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 10px;
//   border-radius: 30px;
//   background-color:hsl(0, 0%, 12%) ;
// }
// .Quiz  .wrap_image_actor{
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
// .Quiz .center_quiz{
//   width: 90%;
  
  
// }
// .Quiz .wrap_image_actor img{
//   width: 400px;
// }

// .Quiz div ul{
//   list-style: none;
//   display: flex;
//   align-items: center;
//   margin-top: 30px;
//   flex-wrap: wrap;
//   gap: 40px;
  
  
// }
// .Quiz div ul label{
//   background-color:hsl(0, 1%, 31%) ;
//   width: 200px;
//   padding: 10px 20px;
//   border: 1px solid red;

// }
// .Quiz div ul label input {
//   opacity: 0;
//   position: absolute;
   
// }
// .Quiz div ul label input:checked + label {
//   background-color: blue; 
//   color: white; 
// }

// .Quiz div .image_actor{
//   width: 450px;
//   height: 250px;
// }
// .btns_next{
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: end;
// }
// .btn_passer , .btn_vraiment{
//   margin-top: 30px;
//   padding: 8px 15px;
//   font-size: 18px;
  
  
// }






{/* <div className='left_questions'>
        {Object.keys(quizs).map((quiz , index)=>(
            <div key={index}>
                <img src={quizs[quiz].img} alt="" />
            </div>
        ))}
        </div>

        <div className='right_questions'>
        {Object.keys(quizs).map((quiz , index)=>(
            <div key={index}>
                <p>{quizs[quiz].question}</p>
                <p>{quizs[quiz].options}</p>
            </div>
        ))}
        </div>
         */}







    //      <div className={`in_right_questions
    //      ${isAnswerCorrect === true && option === quizs[Object.keys(quizs)[questionIndex]].reponse ? 'hadow' : ''}
    //      ${isAnswerCorrect === false && option === selectedOption ? 'redshadow' : ''}
    //    `}>








//     import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import QuizData from '../data/Quizdata';
// import sad from "../assets/sad.png";
// import happy from "../assets/happy.png";

// export const Question_Quiz = () => {
//   const { QuizTitre } = useParams();
//   const quizs = QuizData[QuizTitre];
//   const [questionIndex, setQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
//   const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

//   const handleNextQuestion = () => {
//     if (questionIndex < Object.keys(quizs).length - 1) {
//       setQuestionIndex(questionIndex + 1);
//       setIsAnswerSubmitted(false);
//       setSelectedOption(null);
//       setIsAnswerCorrect(null);
//     } else {
//       // Gérer la fin du quiz
//     }
//   };

//   const handleAnswerSubmit = (selectedOption) => {
//     const currentQuestion = quizs[Object.keys(quizs)[questionIndex]];

//     if (selectedOption === currentQuestion.reponse) {
//       setIsAnswerSubmitted(true);
//       setIsAnswerCorrect(true);
//     } else {
//       setIsAnswerSubmitted(true);
//       setIsAnswerCorrect(false);
//     }

//     setSelectedOption(selectedOption);
//   };

//   return (
//     <div className='wrap_questionQuiz'>
//       <div className='left_questions'>
//         {Object.keys(quizs).slice(0, 1).map((quiz, index) => (
//           <div key={index}>
//             <img src={quizs[quiz].img} alt="" />
//             <div className='howwell'>
//               {/* Affichez ici le score ou d'autres informations si nécessaire */}
//             </div>
//           </div>
//         ))}
//       </div>
//       {quizs[Object.keys(quizs)[questionIndex]].options.map((option, index) => (
//       <div className='right_questions'>
//           <div className={`in_right_questions
//             ${isAnswerCorrect === true && option === quizs[Object.keys(quizs)[questionIndex]].reponse ? 'greenboxshadow' : ''}
//             ${isAnswerCorrect === false && option === selectedOption ? 'redboxshadow' : ''}
//           `}>

//             <div className='resultat_word'>
//               {isAnswerSubmitted ? (
//                 isAnswerCorrect === true ? (
//                   <div>
//                     <img src={happy} alt="" />
//                   </div>
//                 ) : isAnswerCorrect === false ? (
//                   <div>
//                     <img src={sad} alt="" />
//                   </div>
//                 ) : null
//               ) : ("")}
//             </div>
//             {questionIndex < Object.keys(quizs).length && (
//               <div>
//                 <h1>{quizs[Object.keys(quizs)[questionIndex]].question}</h1>
//                 <form action="">
//                   {quizs[Object.keys(quizs)[questionIndex]].options.map((option, index) => (
//                     <label
//                       key={index}
//                       className={`option 
//             ${isAnswerCorrect === true && option === quizs[Object.keys(quizs)[questionIndex]].reponse ? 'correct' : ''}
//             ${isAnswerCorrect === false && option === selectedOption ? 'incorrect' : ''}
//             ${isAnswerCorrect === false && option === quizs[Object.keys(quizs)[questionIndex]].reponse ? 'correct' : ''}
//           `}
//                     >
//                       <input
//                         type="radio"
//                         value={option}
//                         name="answer"
//                         disabled={isAnswerSubmitted}
//                         checked={selectedOption === option}
//                         onClick={() => handleAnswerSubmit(option)}
//                       />
//                       {option}
//                     </label>
//                   ))}
//                 </form>
//                 <div className='btns_next'>
//                   <button className='btn_passer' onClick={handleNextQuestion}>Passer à la question suivante</button>
//                 </div>
//               </div>
//             )}
//           </div>
        
//       </div>
//       ))}
//     </div>
//   );
// };
