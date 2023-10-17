import { useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import Films from '../data/data';
import "../css/More.css";
import { Link, Element } from 'react-scroll';
import Question from './Question';
function Details() {
  const { filmTitre } = useParams();
  const film = Films[filmTitre];
  const StarRating = ({ stars }) => {
    const starIcons = "★".repeat(stars);
    return (
        <div>
            <span className="star-rating">{starIcons}</span>
        </div>
    );
};
const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 440) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
      <div className="more-container">         
            <div className='contain_up'>
                <img src={film.Affiche} alt="" height={"400px"} width={"100%"} />
            </div>
            
            
            <div className='description_wrapper' id='Description'> 
                <div className='description_wrap'>
                    <div className='description_more'>
                    <div>
                        <img src={film.img} alt="" />
                    </div>
                    <div className='first_detail'>
                        <p>{film.Genre}</p>
                        <h1>{film.titre}</h1>
                        <h2>{film.date}</h2>               
                       
                       
                    </div>
                    </div>
                    <div className='other_detail'>
                        <div className="rate">
                        <p>{film.vue} vues</p>
                        <p className='star'> <b> <StarRating stars={film.star} /></b> <span>★</span></p>     
                        <div className={`rapide${sticky ? ' rapide_sticky' : ''}`}> 
                            <ul>
                            <li><Link to="Description" smooth={true} duration={1000}>Descrition</Link></li>
                            <li><Link to="Casting" smooth={true} duration={1000}>Casting</Link></li>
                            <li><Link to="Critique" smooth={true} duration={1000}>Critique</Link></li>
                            <li><Link to="Question" smooth={true} duration={1000}>Question</Link></li>
                            </ul> 
                        </div>                  
                    </div>
                        <div>
                        <Element name="Description" className="element">
                <ul className='detail_ul'>
                    <li><b>Realisateur</b>: {film.Réalisateur}</li>
                    <li><b>Groupes</b>: {film.Groupes}</li>
                    <li><b>Date de sortie</b>: {film.date}</li>
                    <li><b>Durée</b>: {film.durée}</li>
                    <li><b>Pays d'origine</b>: {film.pays}</li>
                    <li><b>Synopsis</b>: {film.description}</li>
                </ul>
                </Element>
                <Element name="Casting" className="element">
                <div className='wrap_casting_more' id='Casting'>
                    <h1>Casting</h1>
                    <hr />
                    <div className='casting_more'>
                {film.Casting.slice(0, 5).map((cast, index) => (
                    <div key={index} className="actor-wrapper">
                        <img src={cast.image}  className="actor-image" />
                        <img src={cast.image_movie} className="movie-image" />
                        <p>{cast.nom}</p>
                    </div>
                ))}
            </div>
                <div className='btn_casting'>
                                <button>D'autres acteurs</button>
                            </div>
                </div>
                </Element>
                <Element name="Critique" className="element">
                <div className='Critique' id='Critique'>
                <h1>Critiques : Avis d'internautes</h1>
                <hr />
                <ul className='critique_ul'>
                {film.critiques.map((critique, index) => (
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
            </Element>
            <Element name="Question" className="element">
            <Question/>
            </Element>
                </div>
            </div>
            
                </div>
            </div>
            
        </div>
      
    </div>
  );
}

export default Details;


