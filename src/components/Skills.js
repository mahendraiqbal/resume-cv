import React from 'react';
import '../styles/skills.css';
import getNameId from '../helperFuncs/getNameId';
import Header from './utils/smolComponents/Header';
import DeleteButton from './utils/smolComponents/DeleteButton';
import defaultUser from '../helperFuncs/defaultUser';
import useToggleStatus from './utils/customHooks/useToggleStatus';
import useNestedFormState from './utils/customHooks/useNestedFormState';
import useObjFormState from './utils/customHooks/useObjFormState';
import emptyFormData from '../helperFuncs/emptyFormData';

const Skills = () => {
  const [editing, toggleEditHandler] = useToggleStatus(true);

  const [hoverStatus, handleToggleHover] = useToggleStatus(false);

  const [formDisplayStatus, handleFormDisplay] = useToggleStatus(false);
  const getFormClass = () => (formDisplayStatus ? 'customCatForm' : 'hidden');

  const [category, handleCategoryChange, handleSubmitForm] = useObjFormState(
    emptyFormData.category,
  );

  const [
    categories,
    setCategories,
    handleDeleteCategory,
    handleContentsChange,
    handleToggleTrashIconOn,
    handleToggleTrashIconOff,
  ] = useNestedFormState(defaultUser.categories);

  return (
    <section onMouseEnter={handleToggleHover} onMouseLeave={handleToggleHover}>
      <Header
        name="Skills & Languages"
        formId="skillsFormSubmit"
        editing={editing}
        hoverStatus={hoverStatus}
        toggleEditHandler={toggleEditHandler}
        toggleFormDisplayStatusHandler={handleFormDisplay}
      />
      {editing ? (
        <div className="section edit">
          <form onSubmit={(e) => e.preventDefault()} className="skillsForm">
            {categories.map((category) => {
              const { name, id, contents, trash } = category;
              const nameId = getNameId(name);
              return (
                <div
                  className={`categoryRow ${nameId}`}
                  key={id}
                  onMouseEnter={() => handleToggleTrashIconOn(id)}
                  onMouseLeave={() => handleToggleTrashIconOff(id)}
                >
                  <div className="categoryContent">
                    <label htmlFor={`${nameId}Input`} className="categoryName">
                      {name}:
                    </label>
                    <input
                      id={`${nameId}Input`}
                      className="categoryContents"
                      placeholder={`Enter ${name} here...`}
                      name="contents"
                      onChange={(e) => handleContentsChange(e, id)}
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
          <form
            className={getFormClass()}
            onBlur={(e) => {
              handleSubmitForm(e, handleFormDisplay, setCategories, categories);
            }}
          >
            <input
              id="newCategoryNameInput"
              name="name"
              onChange={(e) => handleCategoryChange(e)}
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
                onMouseEnter={() => handleToggleTrashIconOn(id)}
                onMouseLeave={() => handleToggleTrashIconOff(id)}              >
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
