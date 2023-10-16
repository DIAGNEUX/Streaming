import React from 'react';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Accueil from './component/Accueil';
import Question from './component/Question';
import Casting from './component/Casting';
import { Quiz } from './component/Quiz';
import More from './component/under_component/More';




const App = () => {
  
  return (
      <div className='wrapper'> 
      <div className="wrapper_navbar">
      <div className='Navbar'>
        <Navbar/>
      </div>
      </div>
          <Routes>
            <Route path="/Streaming" element={< Accueil />} />
            <Route path="/" element={<Accueil />} />
            <Route path="/Casting" element={<Casting />} />
            <Route path="/Quiz" element={<Quiz />} />
            <Route path="/Question" element={<Question />} />
            <Route path="/More" element={<More />} />
          </Routes>        

        
      </div>
  );
}

export default App;
