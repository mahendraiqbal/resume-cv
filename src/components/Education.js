import React, { Component } from 'react';
import '../styles/education.css';
import EducationContent from './utils/EducationContent';
import SectionHeader from './utils/SectionHeader';

export default class Education extends Component {
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
        <SectionHeader header="Education" hover={this.state.hoverStatus} />
        <EducationContent />
      </div>
    );
  }
}
