import React from 'react';
import '../../../styles/experience.css';

const EmptyExpForm = (props) => {
  const { title, company, dates, responsibility, responsibilities } = props.job;
  return (
    <form
      className={props.formClass}
      onSubmit={props.submitForm}
      onSubmitCapture={() => {
        if ('activeElement' in document) document.activeElement.blur();
      }}
    >
      <div className="firstFormSection">
        <input
          className="titleForm"
          value={title}
          placeholder="Job Title..."
          onChange={props.changeTitleInput}
        />
        <input
          className="companyForm"
          value={company}
          placeholder="Company Name..."
          onChange={props.changeCompanyInput}
        />
      </div>
      <input
        className="datesForm"
        value={dates}
        placeholder="Dates Attended..."
        onChange={props.changeDatesInput}
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
                props.editEmptyResponsibility(e, responsibility.id)
              }
            />
          </li>
        ))}
        <li key={responsibility.id}>
          <input
            className="responsibilityForm"
            value={responsibility.text}
            placeholder="Responsibilitiy..."
            onChange={props.changeResponsibilityInput}
            onKeyDown={(e) => {
              if (e.key === 'Enter') e.target.blur();
            }}
            onBlur={props.submitEmptyResponsibility}
          />
        </li>
      </ul>
      <button type="submit" className="hidden" />
    </form>
  );
};

export default EmptyExpForm;
