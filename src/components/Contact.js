import React, { Component } from 'react';
import '../styles/contact.css';
import accountEdit from '../assets/account-edit.svg';
import submitIcon from '../assets/checkbox-marked.svg';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
      editButtonClassName: 'hidden',
      name: '',
      phone: '',
      email: '',
      linkedin: '',
    };
  }

  showIcon = () => this.setState({ editButtonClassName: 'editButton' });
  hideIcon = () => this.setState({ editButtonClassName: 'hidden' });
  changeNameInput = (e) => this.setState({ name: e.target.value });
  changePhoneInput = (e) => this.setState({ phone: e.target.value });
  changeEmailInput = (e) => this.setState({ email: e.target.value });
  changeLinkedinInput = (e) => this.setState({ linkedin: e.target.value });

  changeEditingState = (e) => {
    e.preventDefault();
    this.setState({ editing: !this.state.editing });
  };

  render() {
    return this.state.editing ? (
      <form id="info" onSubmit={this.changeEditingState}>
        <div className="firstSection">
          <div className="name">
            <label htmlFor="nameInput">Name:</label>
            <input
              id="nameInput"
              placeholder="Enter your name here..."
              onChange={this.changeNameInput}
              value={this.state.name}
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
              onChange={this.changePhoneInput}
              value={this.state.phone}
            />
          </div>
          <div>
            <label htmlFor="emailInput">Email:</label>
            <input
              id="emailInput"
              placeholder="Email here..."
              onChange={this.changeEmailInput}
              value={this.state.email}
            />
          </div>
          <div>
            <label htmlFor="linkedinInput">LinkedIn:</label>
            <input
              id="linkedinInput"
              placeholder="LinkedIn here..."
              onChange={this.changeLinkedinInput}
              value={this.state.linkedin}
            />{' '}
          </div>
        </div>
      </form>
    ) : (
      <div
        id="info"
        onMouseEnter={this.showIcon}
        onMouseLeave={this.hideIcon}
      >
        <div className="name">{this.state.name}</div>
        <div className="secondSection display">
          {this.state.phone && <div>{this.state.phone}</div>}
          {this.state.email && <div>{this.state.email}</div>}
          {this.state.linkedin && <div>{this.state.linkedin}</div>}
        </div>
        <button className={this.state.editButtonClassName}>
          <img
            className={this.state.editButtonClassName}
            src={accountEdit}
            alt="create account button"
            onClick={this.changeEditingState}
          />
        </button>
      </div>
    );
  }
}
