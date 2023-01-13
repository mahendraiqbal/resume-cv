import React, { Component } from 'react';
// import '../../styles/sectionHeader.css';
import plusIcon from '../../assets/plus.svg';

export default class SectionHeader extends Component {
  iconClassName = () => (this.props.hover ? 'addNew' : 'hidden');

  render() {
    return (
      <div>
        <div className="header">
          <div>{this.props.header}</div>
          <button className={this.iconClassName()}>
            <img src={plusIcon} alt="plus icon" />
            Add New
          </button>
        </div>
        <hr />
      </div>
    );
  }
}
