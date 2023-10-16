import React from 'react';
import Navbar from './Navbar';
import Films from '../data/data';
import "../css/More.css";
import { motion } from 'framer-motion';

const Casting = () => {
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
      <div className="wrap_casting">
        <div className='Casting'>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ display: "flex" , flexWrap : "wrap", gap: "100px",alignItems:"center", justifyContent: "center"}} 
          >
            {Films.Casting.map((cast, index) => (
              <motion.div
                key={index}
                className="card"
                variants={item}
              >
                <img src={cast.image} className="actor-image" />
                <img src={cast.image_movie} className="movie-image" />
                <p>{cast.nom}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Casting;

