import React, { useEffect, useState } from 'react';
import '../styles/contact.css';
import useFormInput from './utils/customHooks/useFormInput';
import previewIcon from '../assets/checkbox-marked.svg';
import editIcon from '../assets/account-edit.svg';

const Contact = () => {
  const name = useFormInput('');
  const phone = useFormInput('');
  const email = useFormInput('');
  const linkedin = useFormInput('');

  const [editing, setEditing] = useState(true);
  const toggleEditHandler = () => setEditing(!editing);

  const [editBtnClass, setEditBtnClass] = useState('hidden');
  const showEditBtnHandler = () => setEditBtnClass('editButton');
  const hideEditBtnHandler = () => setEditBtnClass('hidden');

  useEffect(() => {
    if (!name.value) return;
    document.title =
      name.value.slice(-1) === 's'
        ? `${name.value}' Resume`
        : `${name.value}'s Resume`;
  }, [name]);

  return editing ? (
    <form className="contactForm section edit" onSubmit={toggleEditHandler}>
      <row className="nameForm">
        <label htmlFor="nameInput">Name: </label>
        <input
          id="nameInput"
          placeholder="Empty..."
          {...name}
          required={true}
        />
      </row>
      <button type="submit" className="submitButton">
        <img src={previewIcon} alt="Preview Contact Section" />
      </button>
      <row className="phoneForm">
        <label htmlFor="phoneInput">Phone:</label>
        <input id="phoneInput" placeholder="Empty..." {...phone} />
      </row>
      <row className="emailForm">
        <label htmlFor="emailInput">Email:</label>
        <input id="emailInput" placeholder="Empty..." {...email} />
      </row>
      <row className="linkedinForm">
        <label htmlFor="linkedinInput">LinkedIn:</label>
        <input id="linkedinInput" placeholder="Empty..." {...linkedin} />
      </row>
    </form>
  ) : (
    <section
      className="section contactPreview"
      onMouseEnter={showEditBtnHandler}
      onMouseLeave={hideEditBtnHandler}
    >
      <row className="firstContactPreviewRow">
        {name.value && <div className="name">{name.value}</div>}
        <img
          className={editBtnClass}
          src={editIcon}
          alt="Edit Contact Section"
          onClick={toggleEditHandler}
        />
      </row>
      <row className="secondContactPreviewRow">
        {phone.value && <div className="phone">{phone.value}</div>}
        {phone.value && email.value && <pipe>|</pipe>}
        {email.value && <div className="email">{email.value}</div>}
        {((email.value && linkedin.value) ||
          (phone.value && linkedin.value)) && <pipe>|</pipe>}
        {linkedin.value && <div className="linkedin">{linkedin.value}</div>}
      </row>
    </section>
  );
};

export default Contact;
