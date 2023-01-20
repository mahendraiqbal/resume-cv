import React, { Component } from 'react';
import '../styles/education.css';
import plusIcon from '../assets/plus.svg';
import submitIcon from '../assets/checkbox-marked.svg';
import editIcon from '../assets/account-edit.svg';
import uniqid from 'uniqid';
import EmptyEduForm from './utils/edu/EmptyEduForm';
import EduPreview from './utils/edu/EduPreview';
import ExistingEduForms from './utils/edu/ExistingEduForms';

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverStatus: false,
      editing: true,
      formClass: 'hidden',
      school: {
        institution: '',
        college: '',
        dates: '',
        degrees: '',
        coursework: '',
        activities: '',
        id: uniqid(),
        trash: false,
      },
      schools: [
        {
          institution: 'University of Southern California',
          college: 'Marshall School of Business',
          dates: 'August 2018–May 2022',
          degrees: [
            'Bachelor of Science in Business Administration',
            'Specialization in Computer Programming',
          ],
          coursework: [
            'Operations Management',
            'Database Management',
            'Programing in Python',
          ],
          activities: [
            'Sports Business Association',
            "Men's Lacrosse Team",
            'Pi Kappa Alpha Fraternity',
          ],
          id: uniqid(),
          trash: false,
        },
      ],
    };
  }

  showHoverEls = () => this.setState({ hoverStatus: true });
  hideHoverEls = () => this.setState({ hoverStatus: false });
  showForm = () => this.setState({ formClass: 'schoolRowForm shadow' });
  hideForm = () => this.setState({ formClass: 'hidden' });
  getFormIcon = () => (this.state.editing ? submitIcon : editIcon);
  getNameId = (name) => name.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '');
  changeEditingState = () => this.setState({ editing: !this.state.editing });
  editIconStatus = () =>
    !this.state.hoverStatus && !this.state.editing ? 'hidden' : 'submitButton';

  showTrashIcon = (id) => setTimeout(() => this.trashIconChangeState(id), 0);
  hideTrashIcon = (id) => this.trashIconChangeState(id);
  trashIconChangeState = (id) => {
    const schoolIndex = this.state.schools.findIndex((el) => el.id === id);
    const school = { ...this.state.schools[schoolIndex] };
    school.trash = !school.trash;

    const start = this.state.schools.slice(0, schoolIndex);
    const end = this.state.schools.slice(schoolIndex + 1);
    const newCategoriesArray = [...start, school, ...end];

    this.setState({ schools: newCategoriesArray });
  };

  changeInstitutionInput = (e) => {
    this.setState({
      school: {
        institution: e.target.value,
        college: this.state.school.college,
        dates: this.state.school.dates,
        degrees: this.state.school.degrees,
        coursework: this.state.school.coursework,
        activities: this.state.school.activities,
        id: this.state.school.id,
        trash: this.state.school.trash,
      },
    });
  };

  changeCollegeInput = (e) => {
    this.setState({
      school: {
        institution: this.state.school.institution,
        college: e.target.value,
        dates: this.state.school.dates,
        degrees: this.state.school.degrees,
        coursework: this.state.school.coursework,
        activities: this.state.school.activities,
        id: this.state.school.id,
        trash: this.state.school.trash,
      },
    });
  };

  changeDatesInput = (e) => {
    this.setState({
      school: {
        institution: this.state.school.institution,
        college: this.state.school.college,
        dates: e.target.value,
        degrees: this.state.school.degrees,
        coursework: this.state.school.coursework,
        activities: this.state.school.activities,
        id: this.state.school.id,
        trash: this.state.school.trash,
      },
    });
  };

  changeDegreesInput = (e) => {
    this.setState({
      school: {
        institution: this.state.school.institution,
        college: this.state.school.college,
        dates: this.state.school.dates,
        degrees: e.target.value,
        coursework: this.state.school.coursework,
        activities: this.state.school.activities,
        id: this.state.school.id,
        trash: this.state.school.trash,
      },
    });
  };

  changeCourseworkInput = (e) => {
    this.setState({
      school: {
        institution: this.state.school.institution,
        college: this.state.school.college,
        dates: this.state.school.dates,
        degrees: this.state.school.degrees,
        coursework: e.target.value,
        activities: this.state.school.activities,
        id: this.state.school.id,
        trash: this.state.school.trash,
      },
    });
  };

  changeActivitiesInput = (e) => {
    this.setState({
      school: {
        institution: this.state.school.institution,
        college: this.state.school.college,
        dates: this.state.school.dates,
        degrees: this.state.school.degrees,
        coursework: this.state.school.coursework,
        activities: e.target.value,
        id: this.state.school.id,
        trash: this.state.school.trash,
      },
    });
  };

  editInstitutionInput = (e, id) => {
    const schoolIndex = this.state.schools.findIndex((el) => el.id === id);
    const school = { ...this.state.schools[schoolIndex] };
    school.institution = e.target.value;

    const start = this.state.schools.slice(0, schoolIndex);
    const end = this.state.schools.slice(schoolIndex + 1);
    const newCategoriesArray = [...start, school, ...end];

    this.setState({ schools: newCategoriesArray });
    console.log(this.state.schools);
  };

  editCollegeInput = (e, id) => {
    const schoolIndex = this.state.schools.findIndex((el) => el.id === id);
    const school = { ...this.state.schools[schoolIndex] };
    school.college = e.target.value;

    const start = this.state.schools.slice(0, schoolIndex);
    const end = this.state.schools.slice(schoolIndex + 1);
    const newCategoriesArray = [...start, school, ...end];

    this.setState({ schools: newCategoriesArray });
  };

  editDatesInput = (e, id) => {
    const schoolIndex = this.state.schools.findIndex((el) => el.id === id);
    const school = { ...this.state.schools[schoolIndex] };
    school.dates = e.target.value;

    const start = this.state.schools.slice(0, schoolIndex);
    const end = this.state.schools.slice(schoolIndex + 1);
    const newCategoriesArray = [...start, school, ...end];

    this.setState({ schools: newCategoriesArray });
  };

  editDegreesInput = (e, id) => {
    const schoolIndex = this.state.schools.findIndex((el) => el.id === id);
    const school = { ...this.state.schools[schoolIndex] };
    school.degrees = e.target.value;

    const start = this.state.schools.slice(0, schoolIndex);
    const end = this.state.schools.slice(schoolIndex + 1);
    const newCategoriesArray = [...start, school, ...end];

    this.setState({ schools: newCategoriesArray });
  };

  editCourseworkInput = (e, id) => {
    const schoolIndex = this.state.schools.findIndex((el) => el.id === id);
    const school = { ...this.state.schools[schoolIndex] };
    school.coursework = e.target.value;

    const start = this.state.schools.slice(0, schoolIndex);
    const end = this.state.schools.slice(schoolIndex + 1);
    const newCategoriesArray = [...start, school, ...end];

    this.setState({ schools: newCategoriesArray });
  };

  editActivitiesInput = (e, id) => {
    const schoolIndex = this.state.schools.findIndex((el) => el.id === id);
    const school = { ...this.state.schools[schoolIndex] };
    school.activities = e.target.value;

    const start = this.state.schools.slice(0, schoolIndex);
    const end = this.state.schools.slice(schoolIndex + 1);
    const newCategoriesArray = [...start, school, ...end];

    this.setState({ schools: newCategoriesArray });
  };

  deleteSchool = (id) =>
    this.setState({
      schools: this.state.schools.filter((cat) => cat.id !== id),
    });

  submitForm = (e) => {
    e.preventDefault();
    this.hideForm();
    this.setState({
      schools: this.state.schools.concat(this.state.school),
      school: {
        institution: '',
        college: '',
        dates: '',
        degrees: '',
        coursework: '',
        activities: '',
        id: uniqid(),
        trash: false,
      },
    });
  };

  render() {
    const { editing, hoverStatus } = this.state;
    return (
      <div onMouseEnter={this.showHoverEls} onMouseLeave={this.hideHoverEls}>
        <div className="firstSection header">
          <div className="headerTitle">
            <div>Education</div>
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
              alt="submit form"
            />
          </label>
        </div>
        <hr />
        {this.state.editing ? (
          <div className="educationContainer">
            <ExistingEduForms
              schools={this.state.schools}
              showTrashIcon={this.showTrashIcon}
              hideTrashIcon={this.hideTrashIcon}
              deleteSchool={this.deleteSchool}
              formClass={this.state.formClass}
              submitForm={this.submitForm}
              editInstitutionInput={this.changeInstitutionInput}
              editCollegeInput={this.editCollegeInput}
              editDatesInput={this.editDatesInput}
              editDegreesInput={this.editDegreesInput}
              editCourseworkInput={this.editCourseworkInput}
              editActivitiesInput={this.editActivitiesInput}
            />
            <EmptyEduForm
              school={this.state.school}
              formClass={this.state.formClass}
              submitForm={this.submitForm}
              changeInstitutionInput={this.changeInstitutionInput}
              changeCollegeInput={this.changeCollegeInput}
              changeDatesInput={this.changeDatesInput}
              changeDegreesInput={this.changeDegreesInput}
              changeCourseworkInput={this.changeCourseworkInput}
              changeActivitiesInput={this.changeActivitiesInput}
            />
          </div>
        ) : (
          <EduPreview
            schools={this.state.schools}
            showTrashIcon={this.showTrashIcon}
            hideTrashIcon={this.hideTrashIcon}
            deleteSchool={this.deleteSchool}
          />
        )}
      </div>
    );
  }
}
