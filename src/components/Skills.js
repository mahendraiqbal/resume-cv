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
          <div className="languages">Languages: English and Spanish</div>
          <div className="skills">
            Skills: Advanced Microsoft Excel, Adobe Photoshop, Adobe
            Illustrator, BambooHR, Zendesk, Insuresign
          </div>
          <div className="interests">
            Interests: Lacrosse, Weightlifting, Music, Thrifting, Soccer, Road
            tripping
          </div>
        </div>
      </div>
    );
  }
}

// Languages: Conversational Spanish, English, Python, C++
// Skills: Advanced Microsoft Excel, Adobe Photoshop, Adobe Illustrator, BambooHR, Zendesk, Insuresign
// Interests: Lacrosse, Weightlifting, Music, Thrifting, Soccer, Road tripping
