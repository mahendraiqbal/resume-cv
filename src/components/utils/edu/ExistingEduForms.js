import React from 'react';
import '../../../styles/education.css';
import trashIcon from '../../../assets/delete.svg';

export default function ExistingEduForms(props) {
  return props.schools.map((school) => {
    const {
      institution,
      college,
      dates,
      degrees,
      coursework,
      activities,
      id,
      trash,
    } = school;
    return (
      <form
        className="schoolRowForm shadow"
        key={id}
        id={id}
        onMouseEnter={() => props.showTrashIcon(id)}
        onMouseLeave={() => props.hideTrashIcon(id)}
        onSubmit={(e) => e.preventDefault()}
        onSubmitCapture={() => {
          if ('activeElement' in document) document.activeElement.blur();
        }}
      >
        <div className="firstFormSection">
          <input
            className="institution"
            value={institution}
            placeholder="Institution..."
            onChange={(e) => props.editInstitutionInput(e, id)}
          />
          <input
            className="college"
            value={college}
            placeholder="College Name..."
            onChange={(e) => props.editCollegeInput(e, id)}
          />
          <button
            className={trash ? 'trashIconEdu' : 'hidden'}
            onClick={() => props.deleteSchool(id)}
            type="button"
          >
            <img src={trashIcon} alt="Trash Icon" />
          </button>
        </div>
        <input
          className="datesForm"
          value={dates}
          placeholder="Dates Attended..."
          onChange={(e) => props.editDatesInput(e, id)}
        />
        <input
          className="degreesForm"
          value={degrees}
          placeholder="Degrees Earned..."
          onChange={(e) => props.editDegreesInput(e, id)}
        />
        <input
          className="coursesForm"
          value={coursework}
          placeholder="Relevant Courses..."
          onChange={(e) => props.editCourseworkInput(e, id)}
        />
        <input
          className="activitiesForm"
          value={activities}
          placeholder="Relevant Activities and Societies..."
          onChange={(e) => props.editActivitiesInput(e, id)}
        />
        <button type="submit" className="hidden" />
      </form>
    );
  });
}
