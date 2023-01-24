import React from 'react';
import '../../../styles/education.css';

export default function EmptyEduForm(props) {
  const { institution, college, dates, degrees, coursework, activities } =
    props.school;

  return (
    <form className={props.formClass} onSubmit={props.submitForm}>
      <div className="firstFormSection">
        <input
          className="institutionForm"
          value={institution}
          placeholder="Institution..."
          onChange={props.changeInstitutionInput}
        />
        <input
          className="collegeForm"
          value={college}
          placeholder="College Name..."
          onChange={props.changeCollegeInput}
        />
      </div>
      <input
        className="datesForm"
        value={dates}
        placeholder="Dates Attended..."
        onChange={props.changeDatesInput}
      />
      <input
        className="degreesForm"
        value={degrees}
        placeholder="Degrees Earned..."
        onChange={props.changeDegreesInput}
      />
      <input
        className="coursesForm"
        value={coursework}
        placeholder="Relevant Courses..."
        onChange={props.changeCourseworkInput}
      />
      <input
        className="activitiesForm"
        value={activities}
        placeholder="Relevant Activities and Societies..."
        onChange={props.changeActivitiesInput}
      />
      <button type="submit" className="hidden" />
    </form>
  );
}
