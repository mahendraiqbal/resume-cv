import React from 'react';
import '../../../styles/experience.css';
import trashIcon from '../../../assets/delete.svg';

export default function ExperienceContent(props) {
  const { showTrashIcon, hideTrashIcon, deleteJob, jobs } = props;
  return (
    <div className="experience">
      {jobs.map((job) => {
        const { title, company, id, trash, responsibilities, dates } = job;
        const trashClass = trash ? 'trashIconExp' : 'hidden';
        return (
          <div
            className="jobRow"
            key={id}
            id={id}
            onMouseEnter={() => showTrashIcon(id)}
            onMouseLeave={() => hideTrashIcon(id)}
          >
            <div className="jobHeader">
              {title && company && (
                <div className="job company">
                  <strong>
                    {title} | {company}
                  </strong>
                </div>
              )}
              {dates && <div className="dates">{dates}</div>}
            </div>
            <button className={trashClass} onClick={() => deleteJob(id)}>
              <img src={trashIcon} alt="Trash Icon" />
            </button>
            <ul className="responsibilities">
              {responsibilities.map((responsibility) => (
                <li key={responsibility.id}>{responsibility.text}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
