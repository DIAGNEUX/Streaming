import React from 'react';
import { Form, Link } from 'react-router-dom';
import Navbar from '../Navbar';
import laught from '../../assets/joker/good width.webp';
import affiche from '../../assets/joker/joker grand.jpg';
import "../../css/More.css";
import Film from "../../data/data.jsx";

const StarRating = ({ stars }) => {
    const starIcons = "★".repeat(stars);
    return (
        <div>
            <span className="star-rating">{starIcons}</span>
        </div>
    );
};

const More = () => {
    console.log(Film);
    return (
        <div className="more-container">
            <div className="Navbar">
                <Navbar />
            </div>
            <div className='contain_up'>
                <img src={laught} alt="" height={"400px"} width={"100%"} />
            </div>
            
            <div className='description_wrapper'> 
                <div className='description_wrap'>
                    <div className='description_more'>
                    <div>
                        <img src={affiche} alt="" />
                    </div>
                    <div className='first_detail'>
                        <p>{Film.Genre}</p>
                        <h1>{Film.titre}</h1>
                        <h2>{Film.date}</h2>               
                       
                       
                    </div>
                    </div>
                    <div className='other_detail'>
                        <div className='rate'>
                        <p>{Film.vue} vues</p>
                        <p className='star'> <b> <StarRating stars={Film.star} /></b> <span>★</span></p>                       
                    </div>
                        <div>
                <ul className='detail_ul'>
                    <li><b>Realisateur</b>: {Film.Réalisateur}</li>
                    <li><b>Groupes</b>: {Film.Groupes}</li>
                    <li><b>Date de sortie</b>: {Film.date}</li>
                    <li><b>Durée</b>: {Film.durée}</li>
                    <li><b>Pays d'origine</b>: {Film.pays}</li>
                    <li><b>Synopsis</b>: {Film.description}</li>
                </ul>
                <div className='wrap_casting_more'>
                    <h1>Casting</h1>
                    <hr />
                    <div className='casting_more'>
                {Film.Casting.slice(0, 5).map((cast, index) => (
                    <div key={index} className="actor-wrapper">
                        <img src={cast.image}  className="actor-image" />
                        <img src={cast.image_movie} className="movie-image" />
                        <p>{cast.nom}</p>
                    </div>
                ))}
            </div>
                <div className='btn_casting'>
                                <button><Link to="/Critique">Voir d'autres</Link></button>
                            </div>
                </div>
                <div className='Critique'>
                <h1>Critiques : Avis d'internautes</h1>
                <hr />
                <ul className='critique_ul'>
                {Film.critiques.map((critique, index) => (
                   <li key={index}>
                    <div className='wrap_imgname'>
                    <img src={critique.img} alt="" />
                       <h1>{critique.nom}</h1>
                       </div>
                       <p>{critique.critique}</p>
                   </li>
               ))}

                </ul>
            </div>
                </div>
            </div>
            
                </div>
            </div>
            
        </div>
    );
};

export default More;
