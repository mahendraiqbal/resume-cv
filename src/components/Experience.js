import React, { Component } from 'react';
import '../styles/experience.css';
import Job from './Job';
import SectionHeader from './SectionHeader';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // state to control wether editing or viewing
  }

  render() {
    return (
      <div className="experience">
        <SectionHeader header="Experience" />
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
