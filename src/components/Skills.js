import React, { useState } from 'react';
import '../styles/skills.css';
import getNameId from '../helperFuncs/getNameId';
import trashIcon from '../assets/delete.svg';
import Header from './utils/Header';
import uniqid from 'uniqid';
import DeleteButton from './utils/DeleteButton';
import defaultUser from '../helperFuncs/defaultUser';



const Skills = () => {
  // Editting State
  const [editing, setEditing] = useState(true); // TODO custom hook
  const toggleEditHandler = () => setEditing(!editing);

  // Hover Status State
  const [hoverStatus, setHoverStatus] = useState(false); // TODO custom hook
  const showHoverHandler = () => setHoverStatus(true);
  const hideHoverHandler = () => setHoverStatus(false);

  // Displaying new form
  const [formDisplayStatus, setFormDisplayStatus] = useState(false);
  const toggleFormDisplayStatusHandler = () =>
    setFormDisplayStatus(!formDisplayStatus); // TODO custom hook
  const getFormClass = () =>
    formDisplayStatus ? 'customSkillsForm' : 'hidden';

  // Trash Icon State
  const showTrashIcon = (id) =>
    setTimeout(() => handleChangeDeleteIconDisplay(id), 0); // TODO custom hook
  const hideTrashIcon = (id) => handleChangeDeleteIconDisplay(id);
  const handleChangeDeleteIconDisplay = (id) => {
    const categoryIndex = categories.findIndex((cat) => cat.id === id);
    const category = { ...categories[categoryIndex] };
    category.trash = !category.trash;

    const start = categories.slice(0, categoryIndex);
    const end = categories.slice(categoryIndex + 1);
    const newCategoriesArray = [...start, category, ...end];

    setCategories(newCategoriesArray);
  };

  // Category State
  const [category, setCategory] = useState({
    name: '',
    contents: '',
    id: uniqid(),
    trash: false,
  });
  const handleCategoryChange = (e) =>
    setCategory({ ...category, name: e.target.value });
  const handleSubmitCategoryForm = (e) => {
    e.preventDefault();
    toggleFormDisplayStatusHandler();
    setCategories(categories.concat(category));
    setCategory({
      name: '',
      contents: '',
      id: uniqid(),
      trash: false,
    });
  };

  // Categories State
  const [categories, setCategories] = useState(defaultUser.categories);
  const deleteCategory = (id) =>
    setCategories(categories.filter((category) => category.id !== id));
  const handleContentsChange = (e, id) => {
    const categoryIndex = categories.findIndex((cat) => cat.id === id);
    const category = { ...categories[categoryIndex] };
    category.contents = e.target.value;

    const start = categories.slice(0, categoryIndex);
    const end = categories.slice(categoryIndex + 1);
    const newCategoriesArray = [...start, category, ...end];

    setCategories(newCategoriesArray);
  };

  return (
    <section onMouseEnter={showHoverHandler} onMouseLeave={hideHoverHandler}>
      <Header
        name="Skills & Languages"
        formId="SkillsFormSubmit"
        editing={editing}
        hoverStatus={hoverStatus}
        toggleEditHandler={toggleEditHandler}
        toggleFormDisplayStatusHandler={toggleFormDisplayStatusHandler}
      />
      {editing ? (
        <div className="section edit">
          <form onSubmit={toggleEditHandler} className="skillsForm ">
            {categories.map((category) => {
              const { name, id, contents, trash } = category;
              const nameId = getNameId(name);
              return (
                <div
                  className="categoryRow"
                  id={nameId}
                  key={id}
                  onMouseEnter={() => showTrashIcon(id)}
                  onMouseLeave={() => hideTrashIcon(id)}
                >
                  <div id={nameId} className="categoryContent">
                    <label htmlFor={`${nameId}Input`}>{name}: </label>
                    <input
                      id={`${nameId}Input`}
                      placeholder={`Enter ${name} here...`}
                      onChange={(e) => handleContentsChange(e, id)}
                      value={contents}
                    />
                  </div>
                  <DeleteButton
                    trash={trash}
                    id={id}
                    deleteCategory={deleteCategory}
                  />
                </div>
              );
            })}
            <button type="submit" id="skillsFormSubmit" className="hidden" />
          </form>
          <form className={getFormClass()} onSubmit={handleSubmitCategoryForm}>
            <input
              id="newCategoryNameInput"
              onChange={handleCategoryChange}
              value={category.name}
              placeholder="Enter Custom Category Name..."
            />
          </form>
        </div>
      ) : (
        <div className="skillsContent">
          {categories.map((category) => {
            const { name, id, contents, trash } = category;
            const nameId = getNameId(name);
            return (
              category.contents && (
                <div
                  key={id}
                  id={nameId}
                  className="categoryRow"
                  onMouseEnter={() => showTrashIcon(id)}
                  onMouseLeave={() => hideTrashIcon(id)}
                >
                  <div>
                    {name}: {contents}
                  </div>

                  <DeleteButton trash={trash} id={id} delete={deleteCategory} />
                  <button
                    className={trash ? 'trashIcon' : 'hidden'}
                    // onClick={() => props.deleteCategory(id)}
                  >
                    <img src={trashIcon} alt="Trash Icon" />
                  </button>
                </div>
              )
            );
          })}
        </div>
      )}{' '}
    </section>
  );
};

export default Skills;
