import './styles/app.css';
import React from 'react';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';

const App = () => (
  <container className="container">
    <Contact />
    <Education />
    <Experience />
    <Skills />
  </container>
);

export default App;
