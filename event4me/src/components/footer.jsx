import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';

const Footer = (props) => {
  return (
    <div style={{ backgroundColor: 'whitesmoke', justifyContent: 'center', display: 'flex', alignItems: 'center', height: '48px'}}>
      <p style={{ margin: 0 }}>Darren Wu, Vinay Valsaraj, Ayberk, Vanessa Chang, Michelle Gu @ The University of Texas at Austin</p>
    </div>
  )
}

export default Footer;
