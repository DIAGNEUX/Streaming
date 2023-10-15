import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <p><b>Movie</b></p>
        </div>
        <div className="link">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/Casting">Casting</Link></li>
            <li><Link to="/Question">Question</Link></li>
            <li><Link to="/Quiz">Quiz</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}