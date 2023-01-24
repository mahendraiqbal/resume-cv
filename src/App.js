import './styles/app.css';
import React from 'react';

import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => (
  <containerBig className="splitScreen">
    <column className="container shadow">
      {/* <ContactDeprecated /> */}
      <Education />
      <Experience />
      <Skills />
    </column>
    <container className="container shadow">
      <Contact />
    </container>
  </containerBig>
);

export default App;
