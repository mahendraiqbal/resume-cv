import React, { Component } from 'react';
import '../styles/experience.css';
import ExperienceContent from './utils/exp/ExperienceContent';
import plusIcon from '../assets/plus.svg';
import submitIcon from '../assets/checkbox-marked.svg';
import editIcon from '../assets/account-edit.svg';
import uniqid from 'uniqid';
import ExperienceForm from './utils/exp/ExperienceForm';
import EmptyExpForm from './utils/exp/EmptyExpForm';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverStatus: false,
      editingExp: true,
      formClass: 'hidden',
      job: {
        title: '',
        company: '',
        dates: '',
        responsibility: { id: uniqid(), text: '' },
        responsibilities: [],
        id: uniqid(),
        trash: false,
      },
      jobs: [
        {
          title: 'CEO',
          company: 'Notion',
          dates: 'August 2018–May 2022',
          responsibility: { id: uniqid(), text: '' },
          responsibilities: [
            {
              id: uniqid(),
              text: "Developed a comprehensive 'CRM' to manage customer,course, and employee data in Notion using a series of relational databases combined with a no-code automation software (Make).",
            },
            {
              id: uniqid(),
              text: 'Headed the transition to a new learning management system and website. Includes redevelopment of course and website content as well as the introduction of new integrations with Stripe.',
            },
            {
              id: uniqid(),
              text: 'Collaborated with management and edu teams to ensure client and instructor satisfaction during trial periods with potential LAW (Language At Work) Clients.',
            },
          ],
          id: uniqid(),
          trash: false,
        },
      ],
    };
  }

  showHoverEls = () => this.setState({ hoverStatus: true });
  hideHoverEls = () => this.setState({ hoverStatus: false });
  showForm = () => this.setState({ formClass: 'jobRowForm shadow' });
  hideForm = () => this.setState({ formClass: 'hidden' });
  getFormIcon = () => (this.state.editingExp ? submitIcon : editIcon);
  getNameId = (name) => name.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '');
  changeEditingState = () =>
    this.setState({ editingExp: !this.state.editingExp });
  editIconStatus = () =>
    !this.state.hoverStatus && !this.state.editingExp
      ? 'hidden'
      : 'submitButton';

  showTrashIcon = (id) => setTimeout(() => this.trashIconChangeState(id), 0);
  hideTrashIcon = (id) => this.trashIconChangeState(id);
  trashIconChangeState = (id) => {
    const jobIndex = this.state.jobs.findIndex((job) => job.id === id);
    const job = { ...this.state.jobs[jobIndex] };
    job.trash = !job.trash;

    const start = this.state.jobs.slice(0, jobIndex);
    const end = this.state.jobs.slice(jobIndex + 1);
    const newJobsArray = [...start, job, ...end];

    this.setState({ jobs: newJobsArray });
  };

  deleteJob = (id) =>
    this.setState({ jobs: this.state.jobs.filter((job) => job.id !== id) });

  submitEmptyResponsibility = () => {
    const { responsibilities, responsibility } = this.state.job;
    this.setState({
      job: {
        title: this.state.job.title,
        company: this.state.job.company,
        dates: this.state.job.dates,
        responsibilities: responsibilities.concat(responsibility),
        responsibility: { id: uniqid(), text: '' },
        id: this.state.job.id,
        trash: this.state.job.trash,
      },
    });
  };

  editEmptyResponsibility = (e, respId) => {
    const { responsibilities } = this.state.job;
    const respIndex = responsibilities.findIndex((resp) => resp.id === respId);
    const resp = { ...responsibilities[respIndex] };
    resp.text = e.target.value;

    const start = responsibilities.slice(0, respIndex);
    const end = this.state.jobs.slice(respIndex + 1);
    const newRespArray = [...start, resp, ...end];

    this.setState({
      job: {
        title: this.state.job.title,
        company: this.state.job.company,
        dates: this.state.job.dates,
        responsibility: {
          id: this.state.job.responsibility.id,
          text: this.state.job.responsibility.text,
        },
        responsibilities: newRespArray,
        id: this.state.job.id,
        trash: this.state.job.trash,
      },
    });
  };

  changeResponsibility = (e, jobId) => {
    const jobIndex = this.state.jobs.findIndex((job) => job.id === jobId);
    const job = { ...this.state.jobs[jobIndex] };
    job.responsibility.text = e.target.value;

    const start = this.state.jobs.slice(0, jobIndex);
    const end = this.state.jobs.slice(jobIndex + 1);
    const newJobsArray = [...start, job, ...end];

    this.setState({ jobs: newJobsArray });
  };

  submitResponsibility = (jobId) => {
    const jobIndex = this.state.jobs.findIndex((job) => job.id === jobId);
    const job = { ...this.state.jobs[jobIndex] };
    job.responsibilities = job.responsibilities.concat(job.responsibility);
    job.responsibility = { id: uniqid(), text: '' };

    const start = this.state.jobs.slice(0, jobIndex);
    const end = this.state.jobs.slice(jobIndex + 1);
    const newJobsArray = [...start, job, ...end];

    this.setState({ jobs: newJobsArray });
  };

  editResponsibility = (e, jobId, respId) => {
    const jobIndex = this.state.jobs.findIndex((job) => job.id === jobId);
    const job = { ...this.state.jobs[jobIndex] };
    const responsibilities = { job };

    const respIndex = responsibilities.findIndex((resp) => resp.id === respId);
    const resp = { ...responsibilities[respIndex] };
    resp.text = e.target.value;
    const respStart = responsibilities.slice(0, jobIndex);
    const respEnd = responsibilities.slice(jobIndex + 1);
    const newResp = [...respStart, resp, ...respEnd];

    job.responsibilities = newResp;
    const start = this.state.jobs.slice(0, jobIndex);
    const end = this.state.jobs.slice(jobIndex + 1);
    const newJobsArray = [...start, job, ...end];

    this.setState({ jobs: newJobsArray });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.hideForm();
    this.setState({
      jobs: this.state.jobs.concat(this.state.job),
      job: {
        title: '',
        company: '',
        dates: '',
        responsibility: '',
        responsibilities: [],
        id: uniqid(),
        trash: false,
      },
    });
  };

  changeTitleInput = (e) => {
    this.setState({
      job: {
        title: e.target.value,
        company: this.state.job.company,
        dates: this.state.job.dates,
        responsibility: this.state.job.responsibility,
        responsibilities: this.state.job.responsibilities,
        id: this.state.job.id,
        trash: this.state.job.trash,
      },
    });
  };
  changeCompanyInput = (e) => {
    this.setState({
      job: {
        title: this.state.job.title,
        company: e.target.value,
        dates: this.state.job.dates,
        responsibility: this.state.job.responsibility,
        responsibilities: this.state.job.responsibilities,
        id: this.state.job.id,
        trash: this.state.job.trash,
      },
    });
  };
  changeDatesInput = (e) => {
    this.setState({
      job: {
        title: this.state.job.title,
        company: this.state.job.company,
        dates: e.target.value,
        responsibility: this.state.job.responsibility,
        responsibilities: this.state.job.responsibilities,
        id: this.state.job.id,
        trash: this.state.job.trash,
      },
    });
  };
  changeResponsibilityInput = (e) => {
    this.setState({
      job: {
        title: this.state.job.title,
        company: this.state.job.company,
        dates: this.state.job.dates,
        responsibility: {
          id: this.state.job.responsibility.id,
          text: e.target.value,
        },
        responsibilities: this.state.job.responsibilities,
        id: this.state.job.id,
        trash: this.state.job.trash,
      },
    });
  };

  editTitleInput = (e, id) => {
    const jobIndex = this.state.jobs.findIndex((job) => job.id === id);
    const job = { ...this.state.jobs[jobIndex] };
    job.title = e.target.value;

    const start = this.state.jobs.slice(0, jobIndex);
    const end = this.state.jobs.slice(jobIndex + 1);
    const newJobsArray = [...start, job, ...end];

    this.setState({ jobs: newJobsArray });
  };
  editCompanyInput = (e, id) => {
    const jobIndex = this.state.jobs.findIndex((job) => job.id === id);
    const job = { ...this.state.jobs[jobIndex] };
    job.company = e.target.value;

    const start = this.state.jobs.slice(0, jobIndex);
    const end = this.state.jobs.slice(jobIndex + 1);
    const newJobsArray = [...start, job, ...end];

    this.setState({ jobs: newJobsArray });
  };
  editDatesInput = (e, id) => {
    const jobIndex = this.state.jobs.findIndex((job) => job.id === id);
    const job = { ...this.state.jobs[jobIndex] };
    job.dates = e.target.value;

    const start = this.state.jobs.slice(0, jobIndex);
    const end = this.state.jobs.slice(jobIndex + 1);
    const newJobsArray = [...start, job, ...end];

    this.setState({ jobs: newJobsArray });
  };
  editResponsibilityInput = (e, id) => {
    const jobIndex = this.state.jobs.findIndex((job) => job.id === id);
    const job = { ...this.state.jobs[jobIndex] };
    job.responsibility = {
      id: this.state.job.responsibility.id,
      text: e.target.value,
    };

    const start = this.state.jobs.slice(0, jobIndex);
    const end = this.state.jobs.slice(jobIndex + 1);
    const newJobsArray = [...start, job, ...end];

    this.setState({ jobs: newJobsArray });
  };

  render() {
    const { hoverStatus, jobs, job, editingExp: editing } = this.state;
    return (
      <div onMouseEnter={this.showHoverEls} onMouseLeave={this.hideHoverEls}>
        <div className="firstSection header">
          <div className="headerTitle">
            <div>Experience</div>
            <button
              className={hoverStatus && editing ? 'addNew' : 'hidden'}
              onClick={this.showForm}
            >
              <img src={plusIcon} alt="plus icon" />
              Add New
            </button>
          </div>
          <label
            className={this.editIconStatus()}
            onClick={this.changeEditingState}
          >
            <img
              className="submitButton"
              src={this.getFormIcon()}
              alt="submit skills form"
            />
          </label>
        </div>
        <hr />
        {editing ? (
          <div className="experienceContainer">
            <ExperienceForm
              jobs={jobs}
              showTrashIcon={this.showTrashIcon}
              hideTrashIcon={this.hideTrashIcon}
              deleteJob={this.deleteJob}
              editTitleInput={this.editTitleInput}
              editCompanyInput={this.editCompanyInput}
              editDatesInput={this.editDatesInput}
              editResponsibilityInput={this.editResponsibilityInput}
              changeResponsibility={this.changeResponsibility}
              editResponsibility={this.editResponsibility}
              submitResponsibility={this.submitResponsibility}
            />
            <EmptyExpForm
              className="experience"
              job={job}
              changeTitleInput={this.changeTitleInput}
              changeCompanyInput={this.changeCompanyInput}
              changeDatesInput={this.changeDatesInput}
              changeResponsibilityInput={this.changeResponsibilityInput}
              submitForm={this.submitForm}
              formClass={this.state.formClass}
              submitEmptyResponsibility={this.submitEmptyResponsibility}
              editEmptyResponsibility={this.editEmptyResponsibility}
            />
          </div>
        ) : (
          <ExperienceContent
            jobs={jobs}
            showTrashIcon={this.showTrashIcon}
            hideTrashIcon={this.hideTrashIcon}
            deleteJob={this.deleteJob}
          />
        )}
      </div>
    );
  }
}
