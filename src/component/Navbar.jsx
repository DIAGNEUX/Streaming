import React from 'react';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import Accueil from "./Accueil"
import clappedboard from "../assets/clappedboard.png"

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 60) {
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
      <div className={`navbar${sticky ? ' sticky' : ''}`}>
        <div className="logo">
         <Link to={"/Acceuil"}><img src={clappedboard} alt="" width={"60px"} height={"60px"} /></Link> 
        </div>
        <div className="link">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/Quiz">Quiz</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}