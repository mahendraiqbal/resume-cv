import React, { Component } from 'react';
import '../../styles/experience.css';
import Job from './Job';

export default class ExperienceContent extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: true };
    // state to control wether editing or viewing
  }

  render() {
    return (
      <div className="experience">
        <Job
          jobTitle="CEO"
          organization="Notion"
          startDate="Sep 2021"
          endDate="Nov 2022"
        />
        <Job
          jobTitle="CEO"
          organization="Notion"
          startDate="Sep 2021"
          endDate="Nov 2022"
        />
        <Job
          jobTitle="CEO"
          organization="Notion"
          startDate="Sep 2021"
          endDate="Nov 2022"
        />
      </div>
    );
  }
}
