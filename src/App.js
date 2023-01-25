import './styles/app.css';
import React from 'react';

import Education from './components/Education';
import Experience from './components/Experience';
import SkillsDeprecated from './components/SkillsDeprecated';
import Contact from './components/Contact';
import Skills from './components/Skills';

const App = () => (
  <containerBig className="splitScreen">
    <column className="container shadow">
      {/* <ContactDeprecated /> */}
      <Education />
      <Experience />
      <SkillsDeprecated />
    </column>
    <container className="container shadow">
      <Contact />
      <Skills />
    </container>
  </containerBig>
);

export default App;
