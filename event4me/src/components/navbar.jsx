import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';

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
          <NavItem eventKey={1} href="#">Events</NavItem>
          <NavItem eventKey={2} href="#">Performers</NavItem>
          <NavItem eventKey={3} href="#">Venues</NavItem>
          <NavItem eventKey={4} href="#">Locations</NavItem>
          <NavItem eventKey={5} href="#">About</NavItem>
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
