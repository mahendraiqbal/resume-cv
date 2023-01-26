import React, { useState } from 'react';
import '../styles/skills.css';
import getNameId from '../helperFuncs/getNameId';
import Header from './utils/Header';
import uniqid from 'uniqid';
import DeleteButton from './utils/DeleteButton';
import defaultUser from '../helperFuncs/defaultUser';
import useToggleStatus from './utils/customHooks/useToggleStatus';
import useNestedFormState from './utils/customHooks/useNestedFormState';

const Skills = () => {
  const [editing, toggleEditHandler] = useToggleStatus(true);

  const [hoverStatus, handleToggleHover] = useToggleStatus(false);

  const [formDisplayStatus, handleFormDisplayStatus] = useToggleStatus(false);
  const getFormClass = () => (formDisplayStatus ? 'customCatForm' : 'hidden');

  const emptyCategory = { name: '', contents: '', id: uniqid(), trash: false };
  const [category, setCategory] = useState(emptyCategory);
  const handleCategoryChange = (e) =>
    setCategory({ ...category, name: e.target.value });
  const handleSubmitCategoryForm = (e) => {
    e.preventDefault();
    handleFormDisplayStatus();
    setCategories(categories.concat(category));
    setCategory(emptyCategory);
  };

  const [
    categories,
    setCategories,
    handleDeleteCategory,
    handleContentsChange,
    handleToggleTrashIcon,
  ] = useNestedFormState(defaultUser.categories);

  return (
    <section onMouseEnter={handleToggleHover} onMouseLeave={handleToggleHover}>
      <Header
        name="Skills & Languages"
        formId="SkillsFormSubmit"
        editing={editing}
        hoverStatus={hoverStatus}
        toggleEditHandler={toggleEditHandler}
        toggleFormDisplayStatusHandler={handleFormDisplayStatus}
      />
      {editing ? (
        <div className="section edit">
          <form onSubmit={toggleEditHandler} className="skillsForm ">
            {categories.map((category) => {
              const { name, id, contents, trash } = category;
              const nameId = getNameId(name);
              return (
                <div
                  className={`categoryRow ${nameId}`}
                  key={id}
                  onMouseEnter={() =>
                    setTimeout(() => handleToggleTrashIcon(id), 0)
                  }
                  onMouseLeave={() => handleToggleTrashIcon(id)}
                >
                  <div className="categoryContent">
                    <label htmlFor={`${nameId}Input`} className="categoryName">
                      {name}:
                    </label>
                    <input
                      id={`${nameId}Input`}
                      className="categoryContents"
                      placeholder={`Enter ${name} here...`}
                      onChange={(e) => handleContentsChange(e, id, 'contents')}
                      value={contents}
                    />
                  </div>
                  <DeleteButton
                    trash={trash}
                    id={id}
                    delete={handleDeleteCategory}
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
              <div
                key={id}
                className={`categoryRow ${nameId}`}
                onMouseEnter={() =>
                  setTimeout(() => handleToggleTrashIcon(id), 0)
                }
                onMouseLeave={() => handleToggleTrashIcon(id)}
              >
                <div>{`${name}: ${contents}`}</div>
                <DeleteButton
                  trash={trash}
                  id={id}
                  delete={handleDeleteCategory}
                />
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Skills;
