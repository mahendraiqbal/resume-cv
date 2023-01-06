import './styles/app.css';
import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

export default class App extends Component {
  constructor() {
    super();
    this.state = { tasks: [], task: { text: '', id: uniqid(), num: 1 } };
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}