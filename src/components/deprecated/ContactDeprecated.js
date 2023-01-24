import React, { Component } from 'react';
import '../styles/contact.css';
import ContactPreview from './utils/contact/ContactPreview';
import ContactForm from './utils/contact/ContactForm';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
      name: 'John Watters',
      phone: '(954) 494 - 9167',
      email: 'jack.watters@me.com',
      linkedin: 'https://www.linkedin.com/in/john-watters/',
    };
  }

  changeNameInput = (e) => this.setState({ name: e.target.value });
  changePhoneInput = (e) => this.setState({ phone: e.target.value });
  changeEmailInput = (e) => this.setState({ email: e.target.value });
  changeLinkedinInput = (e) => this.setState({ linkedin: e.target.value });

  changeEditingState = (e) => {
    e.preventDefault();
    this.setState({ editing: !this.state.editing });
  };

  render() {
    const { name, phone, email, linkedin } = this.state;
    return this.state.editing ? (
      <ContactForm
        name={name}
        phone={phone}
        email={email}
        linkedin={linkedin}
        changeEditingState={this.changeEditingState}
        changeNameInput={this.changeNameInput}
        changePhoneInput={this.changePhoneInput}
        changeEmailInput={this.changeEmailInput}
        changeLinkedinInput={this.changeLinkedinInput}
      />
    ) : (
      <ContactPreview
        name={name}
        phone={phone}
        email={email}
        linkedin={linkedin}
        changeEditingState={this.changeEditingState}
      />
    );
  }
}
