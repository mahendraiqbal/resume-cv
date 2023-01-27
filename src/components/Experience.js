import React from 'react';
import '../styles/experience.css';
import Header from './utils/smolComponents/Header';
import DeleteButton from './utils/smolComponents/DeleteButton';
import defaultUser from '../helperFuncs/defaultUser';
import useToggleStatus from './utils/customHooks/useToggleStatus';
import useNestedFormState from './utils/customHooks/useNestedFormState';
import useObjFormState from './utils/customHooks/useObjFormState';
import emptyFormData from '../helperFuncs/emptyFormData';

const Experience = () => {
  const [editing, toggleEditHandler] = useToggleStatus(true);

  const [hoverStatus, handleToggleHover] = useToggleStatus(false);

  const [formDisplayStatus, handleFormDisplay] = useToggleStatus(false);
  const getFormClass = () => (formDisplayStatus ? 'schoolRowForm' : 'hidden');

  const [job, handleJobChange, handleSubmitForm, setJob] = useObjFormState(
    emptyFormData.job,
  );

  const [
    jobs,
    setJobs,
    handleDeleteJob,
    handleJobsChange,
    handleToggleTrashIcon,
  ] = useNestedFormState(defaultUser.jobs);

  const findElementInArr = (elementId, arr) => {
    const index = arr.findIndex((el) => el.id === elementId);
    return [arr[index], index];
  };

  const reinsertChangedEl = (changedElement, arr, index) => [
    ...arr.slice(0, index),
    changedElement,
    ...arr.slice(index + 1),
  ];

  const handleExistingRespChangeExstJob = (e, jobId, respId) => {
    const [job, jobIndex] = findElementInArr(jobId, jobs);
    const { responsibilities } = job;

    const [resp, respIndex] = findElementInArr(respId, responsibilities);
    resp.text = e.target.value;

    job.responsibilities = reinsertChangedEl(resp, responsibilities, respIndex);
    setJobs(reinsertChangedEl(job, jobs, jobIndex));
  };

  const handleNewRespChangeExstJob = (e, jobId) => {
    const [job, jobIndex] = findElementInArr(jobId, jobs);
    job.responsibility.text = e.target.value;
    setJobs(reinsertChangedEl(job, jobs, jobIndex));
  };

  const handleSubmitRespExstJob = (jobId) => {
    const [job, jobIndex] = findElementInArr(jobId, jobs);
    job.responsibilities = job.responsibilities.concat(job.responsibility);
    job.responsibility = emptyFormData.responsibility;

    setJobs(reinsertChangedEl(job, jobs, jobIndex));
  };

  const handleExistingRespChangeNewJob = (e, respId) => {
    const { responsibilities } = job;
    const [resp, respIndex] = findElementInArr(respId, responsibilities);
    resp.text = e.target.value;

    const newRespArr = reinsertChangedEl(resp, responsibilities, respIndex);
    setJob({ ...job, responsibilities: newRespArr });
  };

  const handleNewRespChangeNewJob = (e) => {
    setJob({
      ...job,
      responsibility: { ...job.responsibility, text: e.target.value },
    });
  };

  const handleSubmitRespNewJob = () => {
    setJob({
      ...job,
      responsibilities: job.responsibilities.concat(job.responsibility),
      responsibility: emptyFormData.responsibility,
    });
  };

  return (
    <section onMouseEnter={handleToggleHover} onMouseLeave={handleToggleHover}>
      <Header
        name="Experience"
        formId="experienceFormSubmit"
        editing={editing}
        hoverStatus={hoverStatus}
        toggleEditHandler={toggleEditHandler}
        toggleFormDisplayStatusHandler={handleFormDisplay}
      />
      {editing ? (
        <div className="section">
          {jobs.map((job) => {
            const {
              title,
              company,
              id,
              trash,
              responsibilities,
              responsibility,
              dates,
            } = job;
            return (
              <form
                className="jobRowForm edit section"
                key={id}
                onMouseEnter={() =>
                  setTimeout(() => handleToggleTrashIcon(id), 0)
                }
                onMouseLeave={() => handleToggleTrashIcon(id)}
                onSubmit={(e) => e.preventDefault()}
                onSubmitCapture={() => {
                  if ('activeElement' in document)
                    document.activeElement.blur();
                }}
              >
                <div className="firstFormSection">
                  <input
                    className="titleForm"
                    name="title"
                    value={title}
                    placeholder="Job Title..."
                    onChange={(e) => handleJobsChange(e, id)}
                  />
                  <input
                    className="companyForm"
                    name="company"
                    value={company}
                    placeholder="Company Name..."
                    onChange={(e) => handleJobsChange(e, id)}
                  />
                  <DeleteButton
                    trash={trash}
                    id={id}
                    delete={handleDeleteJob}
                  />
                </div>
                <input
                  className="datesForm"
                  name="dates"
                  value={dates}
                  placeholder="Dates Attended..."
                  onChange={(e) => handleJobsChange(e, id)}
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
                          handleExistingRespChangeExstJob(
                            e,
                            id,
                            responsibility.id,
                          )
                        }
                      />
                    </li>
                  ))}
                  <li key={responsibility.id}>
                    <input
                      key="empty"
                      className="responsibilityForm"
                      name="responsibility.text"
                      value={responsibility.text}
                      placeholder="Responsibilitiy..."
                      onChange={(e) => handleNewRespChangeExstJob(e, id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') e.target.blur();
                      }}
                      onBlur={() => handleSubmitRespExstJob(id)}
                    />
                  </li>
                </ul>
                <button
                  type="submit"
                  className="hidden"
                  id="experienceFormSubmit"
                />
              </form>
            );
          })}
          <form
            className={`${getFormClass()} edit section`}
            onSubmit={(e) =>
              handleSubmitForm(e, handleFormDisplay, setJobs, jobs)
            }
            onSubmitCapture={() => {
              if ('activeElement' in document) document.activeElement.blur();
            }}
          >
            <div className="firstFormSection">
              <input
                className="titleForm"
                value={job.title}
                name="title"
                placeholder="Job Title..."
                onChange={handleJobChange}
              />
              <input
                className="companyForm"
                value={job.company}
                name="company"
                placeholder="Company Name..."
                onChange={handleJobChange}
              />
            </div>
            <input
              className="datesForm"
              value={job.dates}
              name="dates"
              placeholder="Dates Attended..."
              onChange={handleJobChange}
            />
            <div>Add Responsibilities Below...</div>
            <ul className="responsibilitiesForm">
              {job.responsibilities &&
                job.responsibilities.map((responsibility) => (
                  <li key={responsibility.id}>
                    <input
                      className="liInput"
                      value={responsibility.text}
                      placeholder="Responsibilitiy..."
                      onChange={(e) =>
                        handleExistingRespChangeNewJob(e, responsibility.id)
                      }
                    />
                  </li>
                ))}

              <li key={job.responsibility.id}>
                <input
                  className="responsibilityForm"
                  value={job.responsibility.text}
                  placeholder="Responsibilitiy..."
                  onChange={handleNewRespChangeNewJob}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') e.target.blur();
                  }}
                  onBlur={handleSubmitRespNewJob}
                />
              </li>
            </ul>
            <button type="submit" className="hidden" />
          </form>
        </div>
      ) : (
        <div className="experience">
          {jobs.map((job) => {
            const { title, company, id, trash, responsibilities, dates } = job;
            return (
              <div
                className="jobRow"
                key={id}
                onMouseEnter={() =>
                  setTimeout(() => handleToggleTrashIcon(id), 0)
                }
                onMouseLeave={() => handleToggleTrashIcon(id)}
              >
                <div className="jobHeader">
                  {title && company && (
                    <div className="job company">{`${title} | ${company}`}</div>
                  )}
                  {dates && <div className="dates">{dates}</div>}
                </div>
                <DeleteButton trash={trash} id={id} delete={handleDeleteJob} />
                <ul className="responsibilities">
                  {responsibilities.map((responsibility) => (
                    <li key={responsibility.id}>{responsibility.text}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Experience;
