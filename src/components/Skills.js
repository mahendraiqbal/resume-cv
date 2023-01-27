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
    handleToggleTrashIcon,
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
                      name="contents"
                      onChange={(e) => handleContentsChange(e, id)}
                      value={contents}
                    />
                  </div>
                  <DeleteButton
                    trash={trash}
                    id={id}
                    delete={handleDeleteCategory}
                    trashId="skillsTrash"
                  />
                </div>
              );
            })}
            <button type="submit" id="skillsFormSubmit" className="hidden" />
          </form>
          <form
            className={getFormClass()}
            onSubmit={(e) =>
              handleSubmitForm(e, handleFormDisplay, setCategories, categories)
            }
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
                  trashId="skillsTrash"
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
