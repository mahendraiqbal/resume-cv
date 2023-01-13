import React, { Component } from 'react';
import '../../styles/education.css';

export default class EducationContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editButtonClassName: 'hidden',
      name: '',
      phone: '',
      email: '',
      linkedin: '',
    };
  }

  render() {
    return this.state.editing ? (
      ''
    ) : (
      <div className="educationContainer">
        <div className="firstSection">
          <div className="contentInfo">
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
