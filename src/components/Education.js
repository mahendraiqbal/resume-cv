import React from 'react';
import '../styles/education.css';
import Header from './utils/smolComponents/Header';
import DeleteButton from './utils/smolComponents/DeleteButton';
import defaultUser from '../helperFuncs/defaultUser';
import useToggleStatus from './utils/customHooks/useToggleStatus';
import useNestedFormState from './utils/customHooks/useNestedFormState';
import useObjFormState from './utils/customHooks/useObjFormState';
import emptyFormData from '../helperFuncs/emptyFormData';

const Education = () => {
  const [editing, toggleEditHandler] = useToggleStatus(true);

  const [hoverStatus, handleToggleHover] = useToggleStatus(false);

  const [formDisplayStatus, handleFormDisplay] = useToggleStatus(false);
  const getFormClass = () => (formDisplayStatus ? 'schoolRowForm' : 'hidden');

  const [school, handleSchoolChange, handleSubmitForm] = useObjFormState(
    emptyFormData.school,
  );

  const [
    schools,
    setSchools,
    handleDeleteSchool,
    handleSchoolsChange,
    handleToggleTrashIconOn,
    handleToggleTrashIconOff,
  ] = useNestedFormState(defaultUser.schools);

  return (
    <section onMouseEnter={handleToggleHover} onMouseLeave={handleToggleHover}>
      <Header
        name="Education"
        formId="educationFormSubmit"
        editing={editing}
        hoverStatus={hoverStatus}
        toggleEditHandler={toggleEditHandler}
        toggleFormDisplayStatusHandler={handleFormDisplay}
      />
      {editing ? (
        <div className="section ">
          {schools.map((school) => {
            const {
              institution,
              college,
              dates,
              degrees,
              courses,
              activities,
              id,
              trash,
            } = school;
            return (
              <form
                className="schoolRowForm edit section"
                key={id}
                onMouseEnter={() => handleToggleTrashIconOn(id)}
                onMouseLeave={() => handleToggleTrashIconOff(id)}
                onSubmit={(e) => e.preventDefault()}
                onSubmitCapture={() => {
                  if ('activeElement' in document)
                    document.activeElement.blur();
                }}
              >
                <div className="firstFormSection">
                  <input
                    className="institution"
                    name="institution"
                    value={institution}
                    placeholder="Institution..."
                    onChange={(e) => handleSchoolsChange(e, id)}
                  />
                  <input
                    className="college"
                    name="college"
                    value={college}
                    placeholder="College Name..."
                    onChange={(e) => handleSchoolsChange(e, id)}
                  />
                  <DeleteButton
                    trash={trash}
                    id={id}
                    delete={handleDeleteSchool}
                  />
                </div>
                <input
                  className="datesForm"
                  name="dates"
                  value={dates}
                  placeholder="Dates Attended..."
                  onChange={(e) => handleSchoolsChange(e, id)}
                />
                <input
                  className="degreesForm"
                  name="degrees"
                  value={degrees}
                  placeholder="Degrees Earned..."
                  onChange={(e) => handleSchoolsChange(e, id)}
                />
                <input
                  className="coursesForm"
                  name="courses"
                  value={courses}
                  placeholder="Relevant Courses..."
                  onChange={(e) => handleSchoolsChange(e, id)}
                />
                <input
                  className="activitiesForm"
                  name="activities"
                  value={activities}
                  placeholder="Relevant Activities and Societies..."
                  onChange={(e) => handleSchoolsChange(e, id)}
                />
                <button
                  type="submit"
                  className="hidden"
                  id="educationFormSubmit"
                />
              </form>
            );
          })}
          <form
            className={`${getFormClass()} edit section`}
            onSubmit={(e) =>
              handleSubmitForm(e, handleFormDisplay, setSchools, schools)
            }
            onSubmitCapture={() => {
              if ('activeElement' in document) document.activeElement.blur();
            }}
          >
            <input
              value={school.institution}
              name="institution"
              placeholder="Institution..."
              onChange={handleSchoolChange}
            />
            <input
              value={school.college}
              name="college"
              placeholder="College Name..."
              onChange={handleSchoolChange}
            />
            <input
              value={school.dates}
              placeholder="Dates Attended..."
              name="dates"
              onChange={handleSchoolChange}
            />
            <input
              value={school.degrees}
              name="degrees"
              placeholder="Degrees Earned..."
              onChange={handleSchoolChange}
            />
            <input
              value={school.courses}
              name="courses"
              placeholder="Relevant Courses..."
              onChange={handleSchoolChange}
            />
            <input
              value={school.activities}
              name="activities"
              placeholder="Relevant Activities and Societies..."
              onChange={handleSchoolChange}
            />
            <button type="submit" className="hidden" id="educationFormSubmit" />
          </form>
        </div>
      ) : (
        <div className="educationContainer">
          {schools.map((school) => {
            const {
              institution,
              college,
              dates,
              degrees,
              courses,
              activities,
              id,
              trash,
            } = school;
            return (
              <div
                className="schoolRow"
                key={id}
                onMouseEnter={() => handleToggleTrashIconOn(id)}
                onMouseLeave={() => handleToggleTrashIconOff(id)}
              >
                <div className="schoolHeader">
                  {institution && (
                    <div className="school">{`${institution}, ${college}`}</div>
                  )}
                  {dates && <div className="dates">{dates}</div>}
                </div>
                <DeleteButton
                  trash={trash}
                  id={id}
                  delete={handleDeleteSchool}
                />
                {degrees && <div className="degrees">{degrees}</div>}
                {courses && (
                  <div className="courses">Relevant courses: {courses}</div>
                )}
                {activities && (
                  <div className="activities">
                    Activities and Societies: {activities}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Education;
