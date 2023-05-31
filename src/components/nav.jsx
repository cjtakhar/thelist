import React from 'react';
import { Navbar } from 'react-bootstrap';
import './styles/nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand className="nav-brand mx-auto">The List</Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
