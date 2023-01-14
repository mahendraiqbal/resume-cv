import React, { Component } from 'react';
import '../styles/experience.css';
import ExperienceContent from './utils/ExperienceContent';
import plusIcon from '../assets/plus.svg';
import submitIcon from '../assets/checkbox-marked.svg';
import editIcon from '../assets/account-edit.svg';
import trashIcon from '../assets/delete.svg';
import uniqid from 'uniqid';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverStatus: false,
      editing: true,
      formClass: 'hidden',
      experience: {
        title: '',
        company: '',
        dates: '',
        duties: '',
        id: uniqid(),
        trash: false,
      },
      experiences: [
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
  showCatForm = () => this.setState({ categoryClass: '' });
  hideCategoryForm = () => this.setState({ categoryClass: 'hidden' });
  getFormIcon = () => (this.state.editing ? submitIcon : editIcon);
  getNameId = (name) => name.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '');
  editIconStatus = () => {
    if (this.state.editing) return 'submitButton';
    return this.state.hoverStatus ? 'submitButton' : 'hidden';
  };
  showTrashIcon = (id) => {
    setTimeout(() => {
      const categoryIndex = this.state.categories.findIndex(
        (el) => el.id === id,
      );
      const category = { ...this.state.categories[categoryIndex] };
      category.trash = true;

      const start = this.state.categories.slice(0, categoryIndex);
      const end = this.state.categories.slice(categoryIndex + 1);
      const newCategoriesArray = [...start, category, ...end];

      this.setState({ categories: newCategoriesArray });
    }, 0);
  };
  hideTrashIcon = (id) => {
    const categoryIndex = this.state.categories.findIndex((el) => el.id === id);
    const category = { ...this.state.categories[categoryIndex] };
    category.trash = false;

    const start = this.state.categories.slice(0, categoryIndex);
    const end = this.state.categories.slice(categoryIndex + 1);

    const newCategoriesArray = [...start, category, ...end];

    this.setState({ categories: newCategoriesArray });
  };
  changeEditingState = (e) => {
    e.preventDefault();
    this.setState({
      editing: !this.state.editing,
    });
  };

  render() {
    const { hoverStatus } = this.state;
    return (
      <div onMouseEnter={this.showHoverEls} onMouseLeave={this.hideHoverEls}>
        <div className="firstSection header">
          <div className="headerTitle">
            <div>Skills & Languages</div>
            <button
              className={hoverStatus ? 'addNew' : 'hidden'}
              onClick={this.showCatForm}
            >
              <img src={plusIcon} alt="plus icon" />
              Add New
            </button>
          </div>
          <label
            htmlFor="submitBtnLabel"
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
        <ExperienceContent />
      </div>
    );
  }
}
