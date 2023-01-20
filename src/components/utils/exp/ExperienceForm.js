import React from 'react';
import '../../../styles/experience.css';
import trashIcon from '../../../assets/delete.svg';

const ExperienceForm = (props) => (
  <div>
    {props.jobs.map((job) => {
      const {
        title,
        company,
        id,
        trash,
        responsibilities,
        responsibility,
        dates,
      } = job;
      const trashClass = trash ? 'trashIconExp' : 'hidden';
      return (
        <form
          className="jobRowForm shadow"
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
              className="titleForm"
              value={title}
              placeholder="Job Title..."
              onChange={(e) => props.editTitleInput(e, id)}
            />
            <input
              className="companyForm"
              value={company}
              placeholder="Company Name..."
              onChange={(e) => props.editCompanyInput(e, id)}
            />
            <button
              className={trashClass}
              onClick={() => props.deleteJob(id)}
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
          <div>Add Responsibilities Below...</div>
          <ul className="responsibilitiesForm">
            {responsibilities.map((responsibility) => (
              <li key={responsibility.id}>
                <input
                  className="liInput"
                  value={responsibility.text}
                  placeholder="Responsibilitiy..."
                  onChange={(e) =>
                    props.editResponsibility(e, id, responsibility.id)
                  }
                />
              </li>
            ))}
            <li key={responsibility.id}>
              <input
                key="empty"
                className="responsibilityForm"
                value={responsibility.text}
                placeholder="Responsibilitiy..."
                onChange={(e) => props.changeResponsibility(e, id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') e.target.blur();
                }}
                onBlur={() => props.submitResponsibility(id)}
              />
            </li>
          </ul>
          <button type="submit" className="hidden" />
        </form>
      );
    })}
  </div>
);

export default ExperienceForm;
