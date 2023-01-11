import React, { Component } from 'react';
import '../styles/skills.css';
import SectionHeader from './SectionHeader';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // state to control wether editing or viewing
  }

  render() {
    return (
      <div className="other">
        <SectionHeader header="Skills" />
        <div className="skill-content">
          <div className="languages">Languages: {this.props.languages}</div>
          <div className="skills">
            Skills: {this.props.skills}
          </div>
          <div className="interests">
            Interests: {this.props.interests}
          </div>
        </div>
      </div>
    );
  }
}
