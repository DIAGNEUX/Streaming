import React, { useEffect, useState } from 'react';
import "../App.css";
import leftfleche from "../assets/left.png";
import rightfleche from "../assets/right.png";
import Films from '../data/data';
import { Link } from 'react-router-dom';

const Accueil = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = Object.keys(Films);
  const totalSlides = slides.length;
  
  useEffect(() => {
    const autoInterval = setInterval(automatique_next, 5000);

    return () => {
      clearInterval(autoInterval);
    }
  }, [currentSlide]);

  const Affiche_slide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    Affiche_slide(prevIndex);
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % totalSlides;
    Affiche_slide(nextIndex);
  };

  const automatique_next = () => {
    const nextIndex = (currentSlide + 1) % totalSlides;
    Affiche_slide(nextIndex);
  };

  return (
    <div>
      <div className="grid_them">
        {slides.map((film, index) => (
          <div key={index} className={`grid_slide ${index === currentSlide ? 'show' : 'hide'}`}>
            <img src={Films[film].Affiche} alt="" />
            <div className='wrap_background_opacity'>
              <div className='background_opacity'>
                <div className='left_b_opacity'>
              <h1>{Films[film].titre}</h1>
              <p>{Films[film].description}</p>
              <div className='btn_info'>
                <button>En savoir plus</button>
              </div>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="btns_rl">
        <div className="btn_left" onClick={prevSlide}>
          <img src={leftfleche} alt="Précédent" />
        </div>
        <div className="dots">
        {slides.map((_, index) => (
          <div key={index} className={`dot ${index === currentSlide ? 'active_dot' : ''}`}> 0{index + 1} </div>
        ))}
      </div>
        <div className="btn_right" onClick={nextSlide}>
          <img src={rightfleche} alt="Suivant" />
        </div>
      </div>
      <h2>Pour toi</h2>
      <div className="wrap_movies">
        {slides.slice(0,4).map((film , index)=> (
          <div className='wrap_img_movies'>
             <img src={Films[film].img} alt="" className="original-img" />
             <div className='hover-img'>
             <img src={Films[film].Affiche} alt="" className="" />
             <div className="par_movies">
             <div>
             <h1>{Films[film].titre}</h1>
             
             <button>
             <Link to={`/film/${film}`}>En savoir plus</Link>
             </button>
             </div>
             </div>
             </div>
          </div>
        ))}
      </div>
      <h2>Pour toi</h2>
      <div className='wrap_movies'>
      {slides.slice(4,8).map((film , index)=> (
          <div className='wrap_img_movies'>
            <img src={Films[film].img} alt="" className="original-img" />
            <div className='hover-img'>
             <img src={Films[film].Affiche} alt="" className="" />
             <div className="par_movies">
              <div>
             <h1>{Films[film].titre}</h1>
             <button>
             <Link to={`/film/${film}`}>En savoir plus</Link>
             </button>
             </div>
             </div>
             </div>
              </div>
        ))}
      </div>
      </div>
  );
};

export default Accueil;
