import React, { Component } from 'react';
import '../styles/skillsDeprecated.css';
import plusIcon from '../assets/plus.svg';
import submitIcon from '../assets/checkbox-marked.svg';
import editIcon from '../assets/account-edit.svg';
import trashIcon from '../assets/delete.svg';
import uniqid from 'uniqid';
import SkillsPreview from './deprecated/skills/SkillsPreview';

export default class SkillsDeprecated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
      categoryClass: 'hidden',
      hoverStatus: false,
      editButtonClassName: 'hidden',
      category: { name: '', contents: '', id: uniqid(), trash: false },
      categories: [
        {
          name: 'Skills',
          contents: 'React, NodeJs, Typescript, Next.js ,Figma',
          id: uniqid(),
          trash: false,
        },
        {
          name: 'Languages',
          contents: 'Spanish (conversational) & English (Native)',
          id: uniqid(),
          trash: false,
        },
        {
          name: 'Interests',
          contents: 'Hockey, Country Music, Car Camping, Skiing, Backpacking',
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
  getFormIconSkills = () => (this.state.editing ? submitIcon : editIcon);
  getNameId = (name) => name.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '');

  editIconStatusSkills = () =>
    !this.state.hoverStatus && !this.state.editing ? 'hidden' : 'submitButton';

  showTrashIcon = (id) => setTimeout(() => this.trashIconChangeState(id), 0);
  hideTrashIcon = (id) => this.trashIconChangeState(id);
  trashIconChangeState = (id) => {
    const categoryIndex = this.state.categories.findIndex((el) => el.id === id);
    const category = { ...this.state.categories[categoryIndex] };
    category.trash = !category.trash;

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

  submitCategoryForm = (e) => {
    e.preventDefault();
    this.hideCategoryForm();
    this.setState({
      categories: this.state.categories.concat(this.state.category),
      category: { name: '', contents: '', id: uniqid(), trash: 'hidden' },
    });
  };

  changeCategoryInput = (e) =>
    this.setState({
      category: {
        name: e.target.value,
        contents: this.state.category.contents,
        id: this.state.category.id,
        trashIcon: this.state.category.trash,
      },
    });

  deleteCategory = (id) =>
    this.setState({
      categories: this.state.categories.filter((cat) => cat.id !== id),
    });

  changeCustomFieldInput = (e, id) => {
    const categoryIndex = this.state.categories.findIndex((el) => el.id === id);
    const category = { ...this.state.categories[categoryIndex] };
    category.contents = e.target.value;

    const start = this.state.categories.slice(0, categoryIndex);
    const end = this.state.categories.slice(categoryIndex + 1);
    const newCategoriesArray = [...start, category, ...end];

    this.setState({ categories: newCategoriesArray });
  };

  render() {
    const { categoryClass, category, categories, hoverStatus, editing } =
      this.state;
    return (
      <div onMouseEnter={this.showHoverEls} onMouseLeave={this.hideHoverEls}>
        <div className="firstSection header">
          <div className="headerTitle">
            <div>Skills & Languages</div>
            <button
              className={hoverStatus && editing ? 'addNew' : 'hidden'}
              onClick={this.showCatForm}
            >
              <img src={plusIcon} alt="plus icon" />
              Add New
            </button>
          </div>
          <label
            htmlFor="submitBtnLabel"
            className={this.editIconStatusSkills()}
            onClick={this.changeEditingState}
          >
            <img
              className="submitButton"
              src={this.getFormIconSkills()}
              alt="submit skills form"
            />
          </label>
        </div>
        <hr />
        {editing ? (
          <div className="skillsContain">
            <form
              onSubmit={this.changeEditingState}
              id="skillForm"
              className="shadow"
            >
              {categories.map((category) => {
                const { name, id, contents, trash } = category;
                const nameId = this.getNameId(name);
                return (
                  <div
                    className="categoryRow"
                    id={nameId}
                    key={id}
                    onMouseEnter={() => this.showTrashIcon(id)}
                    onMouseLeave={() => this.hideTrashIcon(id)}
                  >
                    <div id={nameId} className="categoryContent">
                      <label htmlFor={`${nameId}Input`}>{name}: </label>
                      <input
                        id={`${nameId}Input`}
                        placeholder={`Enter ${name} here...`}
                        onChange={(e) => this.changeCustomFieldInput(e, id)}
                        value={contents}
                      />
                    </div>
                    <button
                      className={trash ? 'trashIcon' : 'hidden'}
                      onClick={() => this.deleteCategory(id)}
                    >
                      <img src={trashIcon} alt="Trash Icon" />
                    </button>
                  </div>
                );
              })}
              <button type="submit" id="submitBtnLabel" />
            </form>
            <form className={categoryClass} onSubmit={this.submitCategoryForm}>
              <input
                id="newCategoryNameInput"
                placeholder="Enter Custom Category Name..."
                onChange={this.changeCategoryInput}
                value={category.name}
              />
            </form>
          </div>
        ) : (
          <SkillsPreview
            categories={categories}
            deleteCategory={this.deleteCategory}
            showTrashIcon={this.showTrashIcon}
            hideTrashIcon={this.hideTrashIcon}
            getNameId={this.getNameId}
          />
        )}
      </div>
    );
  }
}
