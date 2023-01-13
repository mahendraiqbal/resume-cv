import React, { Component } from 'react';
import '../styles/experience.css';
import ExperienceContent from './utils/ExperienceContent';
import SectionHeader from './utils/SectionHeader';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverStatus: false,
    };
  }

  showIcon = () => this.setState({ hoverStatus: true });
  hideIcon = () => this.setState({ hoverStatus: false });

  render() {
    return (
      <div onMouseEnter={this.showIcon} onMouseLeave={this.hideIcon}>
        <SectionHeader header="Experience" hover={this.state.hoverStatus} />
        <ExperienceContent />
      </div>
    );
  }
}
