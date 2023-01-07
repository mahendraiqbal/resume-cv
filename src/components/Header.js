import React, { Component } from 'react';
import '../styles/header.css'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // state to control wether editing or viewing
  }

  render() {
    return (
      <div className="info">
        <div className="name">Jack Watters</div>
        <div className="contact">
          <div>(954)494-9167</div>
          <div>Jack.watters@me.com</div>
          <div>linkedin.com/in/john-watters/</div>
        </div>
      </div>
    );
  }
}
