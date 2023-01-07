import React, { Component } from 'react';
import '../styles/education.css';
import SectionHeader from './SectionHeader';

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // state to control wether editing or viewing
  }

  render() {
    return (
      <div className="education">
        <SectionHeader header="Education" />
        {/* below should be its own component */}
        <div className="content">
          <div className="content-info">
            <div className="school">
              <strong>
                University of Southern California, Marshall School of Business
              </strong>
            </div>
            <div className="dates">August 2018–May 2022</div>
          </div>
          <div className="degree">
            Bachelor of Science, Business Administration, Specialization in
            Computer Programming
          </div>
          <div className="courses">
            Relevant Coursework: Operations Management, Communication Strategy
            in Business, Programing in Python
          </div>
          <div className="activities">
            Activities and Societies: Sports Business Association, Men's
            Lacrosse Team, Pi Kappa Alpha Fraternity
          </div>
        </div>
      </div>
    );
  }
}
