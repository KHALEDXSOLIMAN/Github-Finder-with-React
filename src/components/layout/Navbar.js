import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const Xavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="container"></div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">
          {' '}
          <i className={props.icon}></i>
          {props.title}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse mr-auto isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/" style={{ textDecoration: 'none' }}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" style={{ textDecoration: 'none' }}>
                About
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
Xavbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github mr',
};
Xavbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Xavbar;
