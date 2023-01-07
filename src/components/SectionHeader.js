import React, { Component } from 'react';
import '../styles/sectionHeader.css'

export default class SectionHeader extends Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.header}</div>
        <hr></hr>
      </div>
    );
  }
}
