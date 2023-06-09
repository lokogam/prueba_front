import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import Articles from './components/Articles.js';
import Slides from './components/Slides.js';
import { ARTICLES } from './data/dataArticle.js';
import { SLIDES } from './data/dataSlides.js';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div id="navigation" className="text-center">
        <NavLink to={`/`}> <button className="outlined" >1</button></NavLink>
        <NavLink to={`/point_two`}> <button className="outlined">2</button></NavLink>
        <button className="outlined">3</button>
      </div>
      <Routes>
        <Route exact path="/" element={<Slides dataSlides={SLIDES}/>}/>
        <Route path="/point_two"  element={<Articles dataArticle={ARTICLES}/>}/>
        <Route path="*" element={<Slides/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
