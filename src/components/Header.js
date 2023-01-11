import React, { Component } from 'react';
import '../styles/header.css';
import accountEdit from '../assets/account-edit.svg';
import submitIcon from '../assets/checkbox-marked.svg';

export default class Header extends Component {
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

  showIcon = () => {
    this.setState({
      editButtonClassName: 'editButton',
    });
  };

  hideIcon = () => {
    this.setState({
      editButtonClassName: 'hidden',
    });
  };
  
  submitSection = (e) => {
    e.preventDefault();
    this.setState({
      editing: !this.state.editing,
    });
  };

  changeNameInput = (e) =>
    this.setState({
      name: e.target.value,
    });

  changePhoneInput = (e) =>
    this.setState({
      phone: e.target.value,
    });

  changeEmailInput = (e) =>
    this.setState({
      email: e.target.value,
    });

  changeLinkedinInput = (e) =>
    this.setState({
      linkedin: e.target.value,
    });

  render() {
    return this.state.editing ? (
      <form id="infoContainer" onSubmit={this.submitSection}>
        <div className="firstSection">
          <div className="name">
            <label htmlFor="nameInput">Name:</label>
            <input
              id="nameInput"
              placeholder="Enter your name here..."
              onChange={this.changeNameInput}
              value={this.state.name}
            ></input>
          </div>
          <button type="submit" className="submitButton">
            <img
              className="submitButton"
              src={submitIcon}
              alt="create account button"
            />
          </button>
        </div>
        <div className="secondSection">
          <label htmlFor="phoneInput">Phone Number:</label>
          <input
            id="phoneInput"
            placeholder="Phone here..."
            onChange={this.changePhoneInput}
            value={this.state.phone}
          ></input>
          <label htmlFor="emailInput">Email:</label>
          <input
            id="emailInput"
            placeholder="Email here..."
            onChange={this.changeEmailInput}
            value={this.state.email}
          ></input>
          <label htmlFor="linkedinInput">LinkedIn:</label>
          <input
            id="linkedinInput"
            placeholder="LinkedIn here..."
            onChange={this.changeLinkedinInput}
            value={this.state.linkedin}
          ></input>
        </div>
      </form>
    ) : (
      <div
        id="infoContainer"
        onMouseEnter={this.showIcon}
        onMouseLeave={this.hideIcon}
      >
        <div className="firstSection">
          <div className="name">{this.state.name}</div>
          <button className={this.state.editButtonClassName}>
            <img
              className={this.state.editButtonClassName}
              src={accountEdit}
              alt="create account button"
              onClick={this.submitSection}
            />
          </button>
        </div>
        <div className="secondSection">
          <div>{this.state.phone}</div>
          <div>{this.state.email}</div>
          <div>{this.state.linkedin}</div>
        </div>
      </div>
    );
  }
}
