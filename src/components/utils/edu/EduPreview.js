import React from 'react';
import '../../../styles/education.css';
import trashIcon from '../../../assets/delete.svg';

export default function EduPreview(props) {
  return (
    <div className="educationContainer">
      {props.schools.map((school) => {
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
          <div
            className="schoolRow"
            key={id}
            id={id}
            onMouseEnter={() => props.showTrashIcon(id)}
            onMouseLeave={() => props.hideTrashIcon(id)}
          >
            <div className="schoolHeader">
              {institution && (
                <div className="schoolName">
                  <strong>
                    {institution}, {college}
                  </strong>
                </div>
              )}
              {dates && <div className="dates">{dates}</div>}
            </div>
            <button
              className={trash ? 'trashIconEdu' : 'hidden'}
              onClick={() => props.deleteSchool(id)}
            >
              <img src={trashIcon} alt="Trash Icon" />
            </button>
            {degrees && <div className="degrees">{degrees}</div>}
            {coursework && (
              <div className="courses">Relevant Coursework: {coursework}</div>
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
  );
}
