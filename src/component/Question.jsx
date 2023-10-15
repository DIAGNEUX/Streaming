import React, { useState } from 'react';
import Navbar from './Navbar';
import Film from '../data/data';
import "../component/under_component/More.css";
import down from "../assets/chevron-down.png";
import up from "../assets/chevron-up.png";
import { motion } from 'framer-motion';

const Question = () => {
    const [showResponse, setShowResponse] = useState(null);

    const toggleResponse = (index) => {
        setShowResponse(showResponse === index ? null : index);
    };
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      }
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
     }

    return (
        <div>
            <div className="Navbar">
                <Navbar />
            </div>
            <div className="wrap_question">
                <div className='Question'>
                    <h1>Question</h1>
                    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {Film.questions.map((question, index) => (
        <motion.li
          key={index}
          onClick={() => toggleResponse(index)}
          variants={item}
        >
          <h2>
            {question.question}
            <img src={showResponse === index ? up : down} />
          </h2>
          {showResponse === index && <p>{question.reponse}</p>}
        </motion.li>
      ))}
    </motion.ul>
                </div>
            </div>
            
        </div>
    );

    
}

export default Question;
