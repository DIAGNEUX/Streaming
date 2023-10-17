import React, { useState } from 'react';
import Navbar from './Navbar';
import QuizData from '../data/Quizdata';
import '../css/Quiz.css';
import clappedboard from "../assets/clappedboard.png"
import quiz_img from "../assets/quizineed.png"

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
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};
