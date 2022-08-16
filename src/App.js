import React from 'react';

import './App.css';

import {BrowserRouter as Router, Routes, Route, Links} from 'react-router-dom';
import Heading from './components/Head/Heading/Heading';
import Footer from './components/Footer/Footer';

import About from './Pages/About/About';
import Guide from './Pages/LearningGuide/Guide';
import Projects from './Pages/Projects/Projects';
import Templates from './Pages/Templates/Templates';
import Archive from './components/Archcive/Archive';

function App() {
  return (
    <>
      <Router>
        <Heading />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/guide' element={<Guide />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/templates' element={<Templates />} />
          <Route path='/tools' element={''} />
          <Route path='/archive' element={<Archive />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
