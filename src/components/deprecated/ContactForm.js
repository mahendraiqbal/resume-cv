import React from 'react';
import '../../../styles/contact.css';
import submitIcon from '../../../assets/checkbox-marked.svg';

export default function ContactForm(props) {
  return (
    <form  className='card shadow' onSubmit={props.changeEditingState}>
      <div className="firstSectionContact">
        <div className="name">
          <label htmlFor="nameInput">Name:</label>
          <input
            id="nameInput"
            placeholder="Enter your name here..."
            onChange={props.changeNameInput}
            value={props.name}
            required={true}
          />
        </div>
        <button type="submit" className="submitButton">
          <img src={submitIcon} alt="create account" />
        </button>
      </div>
      <div className="secondSection">
        <div>
          <label htmlFor="phoneInput">Phone:</label>
          <input
            id="phoneInput"
            placeholder="Phone Number here..."
            onChange={props.changePhoneInput}
            value={props.phone}
          />
        </div>
        <div>
          <label htmlFor="emailInput">Email:</label>
          <input
            id="emailInput"
            placeholder="Email here..."
            onChange={props.changeEmailInput}
            value={props.email}
          />
        </div>
        <div>
          <label htmlFor="linkedinInput">LinkedIn:</label>
          <input
            id="linkedinInput"
            placeholder="LinkedIn here..."
            onChange={props.changeLinkedinInput}
            value={props.linkedin}
          />
        </div>
      </div>
    </form>
  );
}
