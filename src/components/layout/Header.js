import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';

const Header = props => {
  const { branding } = props;
  return (
    <Navbar bg="light" expand="lg" className="mb-5">
      <Navbar.Brand className="display-4">
        <i className="fas fa-chart-line" /> {branding}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="app-navbar" />
      <Navbar.Collapse id="app-navbar">
        <Nav className="mr-auto">
          <Link to="/stock-list" className="nav-link">
            <i className="fas fa-list-alt" /> Stock List
          </Link>
        </Nav>
        <Nav className="ml-auto">
          <Link to="/" className="nav-link">
            <i className="fas fa-home" /> Home
          </Link>
          <Link to="/about" className="nav-link">
            <i className="far fa-question-circle" /> About
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
Header.defaultProps = {
  branding: 'Stock Tool'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
