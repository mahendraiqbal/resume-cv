import React, { Component } from 'react';
import '../../../styles/contact.css';
import accountEdit from '../../../assets/account-edit.svg';

export default class ContactPreview extends Component {
  constructor(props) {
    super(props);
    this.state = { editButtonClassName: 'hidden' };
  }

  showIcon = () => this.setState({ editButtonClassName: 'editButton' });
  hideIcon = () => this.setState({ editButtonClassName: 'hidden' });

  render() {
    const { name, phone, email, linkedin, changeEditingState } = this.props;
    return (
      <div id="info" onMouseEnter={this.showIcon} onMouseLeave={this.hideIcon}>
        <div className="firstSectionContact">
          <div className="name">{name}</div>
          <button className={this.state.editButtonClassName}>
            <img
              className={this.state.editButtonClassName}
              src={accountEdit}
              alt="create account button"
              onClick={changeEditingState}
            />
          </button>
        </div>
        <div className="secondSectionPreview">
          {phone && <div>{phone}</div>}
          {phone && email && <div className="line">|</div>}
          {email && <div>{email}</div>}
          {((email && linkedin) || (phone && linkedin)) && (
            <div className="line">|</div>
          )}
          {linkedin && <div>{linkedin}</div>}
        </div>
      </div>
    );
  }
}
