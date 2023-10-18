import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuizData from '../data/Quizdata';
import '../css/Quiz.css';
import quiz_img from "../assets/quizineed.png"
import Films from '../data/data';

export const Quiz = () => {
 
  return (
    <div>
      <div className="Wrap_Quiz">
        <div className='Quiz'>
          <div className="left_quiz">
            <div>
        <h1>Le Grand Quiz des Films</h1>
        <p>Testez vos connaissances sur le cinéma et 
          découvrez si vous êtes un véritable cinéphile.</p>
          </div>
        </div>
        <div className="right_quiz">
          <div className='clap'>
            <img className='quiz_img' src={quiz_img} alt="" />
          </div>
          </div>
        </div>
        <div className="wrap_card_quiz">
        <div className='card_quiz'>
          <ul>
           {Object.keys(Films).map((film , index)=>(
            <li key={index}>
              <h1>{Films[film].titre}</h1>
              <button><Link to={`/Quiz/${film}`} >Commencer le Quiz</Link></button>
            </li>
           ))}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};
