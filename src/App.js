import './styles/app.css';
import React, { Component } from 'react';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container shadow">
        <Contact />
        <Education />
        <Experience />
        <Skills />
      </div>
    );
  }
}
