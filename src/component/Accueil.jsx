import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import "../App.css"

const Accueil = () => {
  return (
    <div>
      <div className="Navbar_Accueil">
          <Navbar />
        </div>
    <div className='wrap_contain'>  
    <div className='left'>
      <h1>Joker</h1>
      <div>
        <p>Dans les années 1980, à Gotham City, Arthur Fleck, un comédien
           de stand-up raté est agressé alors qu'il erre dans les rues de
            la ville déguisé en clown. Méprisé de tous et bafoué, il bascule
             peu à peu dans la folie pour devenir le Joker, un dangereux 
             tueur psychotique.
             </p>
             <div className='more'>
              <button>
                <Link to="/More">En savoir plus</Link>
                </button>
             </div>
             
      </div>
    </div>
    <div className='right'>
 
    </div>
    </div>
    </div>
  )
}
export default Accueil