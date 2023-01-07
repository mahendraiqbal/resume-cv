import React, { Component } from 'react';
import '../styles/experience.css';
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
        <div className="content">
          <div className="content-info">
            <div className="job company">
              <strong>Operations Intern | Freestyle Languages</strong>
            </div>
            <div className="dates">Sep 2021–Nov 2022</div>
          </div>
          <ul className="description">
            <li>
              Developed a comprehensive "CRM" to manage customer, course, and
              employee data in Notion using a series of relational databases
              combined with a no-code automation software (Make).{' '}
            </li>
            <li>
              Headed the transition to a new learning management system and
              website. Includes redevelopment of course and website content as
              well as the introduction of new integrations with Stripe.
            </li>
            <li>
              Collaborated with management and edu teams to ensure client and
              instructor satisfaction during trial periods with potential LAW
              (Language At Work) Clients.
            </li>
          </ul>
        </div>

        <div className="content">
          <div className="content-info">
            <div className="job company">
              <strong>Operations Intern | Freestyle Languages</strong>
            </div>
            <div className="dates">Sep 2021–Nov 2022</div>
          </div>
          <ul className="description">
            <li>
              Developed a comprehensive "CRM" to manage customer, course, and
              employee data in Notion using a series of relational databases
              combined with a no-code automation software (Make).{' '}
            </li>
            <li>
              Headed the transition to a new learning management system and
              website. Includes redevelopment of course and website content as
              well as the introduction of new integrations with Stripe.
            </li>
            <li>
              Collaborated with management and edu teams to ensure client and
              instructor satisfaction during trial periods with potential LAW
              (Language At Work) Clients.
            </li>
          </ul>
        </div>

        <div className="content">
          <div className="content-info">
            <div className="job company">
              <strong>Operations Intern | Freestyle Languages</strong>
            </div>
            <div className="dates">Sep 2021–Nov 2022</div>
          </div>
          <ul className="description">
            <li>
              Developed a comprehensive "CRM" to manage customer, course, and
              employee data in Notion using a series of relational databases
              combined with a no-code automation software (Make).{' '}
            </li>
            <li>
              Headed the transition to a new learning management system and
              website. Includes redevelopment of course and website content as
              well as the introduction of new integrations with Stripe.
            </li>
            <li>
              Collaborated with management and edu teams to ensure client and
              instructor satisfaction during trial periods with potential LAW
              (Language At Work) Clients.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
