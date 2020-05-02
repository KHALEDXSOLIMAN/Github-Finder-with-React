import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
export class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github mr',
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
  render() {
    return (
      <nav
        className="navbar "
        style={{ backgroundColor: '#dc3545', color: '#f4f4f4' }}
      >
        <h1>
          <i className={this.props.icon}></i>
          {this.props.title}
        </h1>
      </nav>
    );
  }
}
export default Navbar;
