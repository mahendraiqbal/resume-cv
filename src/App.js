import './styles/app.css';
import React, { Component } from 'react';
import uniqid from 'uniqid';
import Header from './components/Header';
import Education from './components/Education'; 
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Contact';

export default class App extends Component {
  constructor() {
    super();
    this.state = { tasks: [], task: { text: '', id: uniqid(), num: 1 } };
  }

  render() {
    return (
      <div className='container shadow'>
        <Header />
        <Education />
        <Experience />
        <Skills languages="English, Conversational Spanish" skills="Notion, Figma, Asana, Zapier" interests="Lacrosse, Weightlifting, Music, Thrifting, Soccer, Road tripping" />
        <Footer />
      </div>
    );
  }
}
