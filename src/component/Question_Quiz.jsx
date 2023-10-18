import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizData from '../data/Quizdata';

export const Question_Quiz = () => {
    const { QuizTitre } = useParams();
    const quizs = QuizData[QuizTitre];
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

    const handleNextQuestion = () => {
        if (questionIndex < Object.keys(quizs).length - 1) {
            setQuestionIndex(questionIndex + 1);
            setIsAnswerSubmitted(false);
            setSelectedOption(null); // Réinitialiser l'option sélectionnée pour la nouvelle question
            setIsAnswerCorrect(null);
        } else {
            // Gérer la fin du quiz
        }
    };

    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const handleAnswerSubmit = (selectedOption) => {
        const currentQuestion = quizs[Object.keys(quizs)[questionIndex]];

        if (selectedOption === currentQuestion.reponse) {
            // La réponse de l'utilisateur est correcte
            setIsAnswerSubmitted(true);
            setIsAnswerCorrect(true);
        } else {
            // La réponse de l'utilisateur est incorrecte
            setIsAnswerSubmitted(true);
            setIsAnswerCorrect(false);
        }

        // Stocker l'option sélectionnée
        setSelectedOption(selectedOption);
    };

    return (
        <div className='wrap_questionQuiz'>
            <div className='left_questions'>
                {Object.keys(quizs).slice(0, 1).map((quiz, index) => (
                    <div key={index}>
                        <img src={quizs[quiz].img} alt="" />
                        <div className='howwell'>
                            {/* Affichez ici le score ou d'autres informations si nécessaire */}
                        </div>
                    </div>
                ))}
            </div>

            <div className='right_questions'>
                <div className="in_right_questions">
                    {questionIndex < Object.keys(quizs).length && (
                        <div>
                            <h1>{quizs[Object.keys(quizs)[questionIndex]].question}</h1>
                            <form action="">{quizs[Object.keys(quizs)[questionIndex]].options.map((option, index) => (
    <label
        key={index}
        className={`option ${isAnswerSubmitted ? (option === quizs[Object.keys(quizs)[questionIndex]].reponse ? 'correct' : 'incorrect') : ''} ${selectedOption === option ? (option === quizs[Object.keys(quizs)[questionIndex]].reponse ? 'highlighted correct' : 'highlighted incorrect') : ''}`}
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
                            <div className='btns_next'>
                                {isAnswerSubmitted ? (
                                    isAnswerCorrect === true ? (
                                        <p>Bravo! Vous avez trouvé la bonne réponse.</p>
                                    ) : isAnswerCorrect === false ? (
                                        <p>C'est faux. La bonne réponse est {quizs[Object.keys(quizs)[questionIndex]].reponse}.</p>
                                    ) : null
                                ) : (
                                    <button className='btn_valider' onClick={() => handleAnswerSubmit(selectedOption)}>Valider</button>
                                )}
                                <button className='btn_passer' onClick={handleNextQuestion}>Passer à la question suivante</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
