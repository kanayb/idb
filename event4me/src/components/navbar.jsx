import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <Navbar inverse collapseOnSelect style={{ margin: 0, border: 'none', backgroundColor: 'whitesmoke'}}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Event4Me</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem key={1} eventKey={1} href="#">
            <Link to={'/events'}>
              Events
            </Link>
          </NavItem>
          <NavItem key={2} eventKey={2} href="#">
            <Link to={'/performers'}>
              Performers
            </Link>
          </NavItem>
          <NavItem key={3} eventKey={3} href="#">
            <Link to={'/venues'}>
              Venues
            </Link>
          </NavItem>
          <NavItem key={4} eventKey={4} href="#">
            <Link to={'/locations'}>
              Locations
            </Link>
          </NavItem>
          <NavItem key={5} eventKey={5} href="#">
            <Link to={'/about'}>
              About
            </Link>
          </NavItem>
        </Nav>
        <Navbar.Form pullRight>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

// <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//   <MenuItem eventKey={3.1}>Action</MenuItem>
//   <MenuItem eventKey={3.2}>Another action</MenuItem>
//   <MenuItem eventKey={3.3}>Something else here</MenuItem>
//   <MenuItem divider />
//   <MenuItem eventKey={3.3}>Separated link</MenuItem>
// </NavDropdown>

export default NavBar;
