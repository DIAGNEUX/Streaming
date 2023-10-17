import React from 'react';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';

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
          <p><b>Movie</b></p>
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