import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Navbar = (props) => {
  return (
    <nav
      className="navbar "
      style={{ backgroundColor: '#dc3545', color: '#f4f4f4' }}
    >
      <h1>
        <i className={props.icon}></i>
        {props.title}
      </h1>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github mr',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
