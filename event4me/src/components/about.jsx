import React, { Component } from 'react';
import NameCard from './namecard'
import { PageHeader, Row } from 'react-bootstrap';

const Footer = (props) => {
  return (
    <div>
      <PageHeader>About Us</PageHeader>
      <NameCard
        name="Po-Chen Wu"
        />
      <NameCard
        name="Michelle Gu"
        />
    </div>
  )
}

export default Footer;
