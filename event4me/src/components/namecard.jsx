import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import Img from '../assets/img/profilePics/PoChenWu.jpg'

const Footer = (props) => {
  return (
    <Row>
      <Col xs={6} md={2}>
        <Image widht='120px' height='120px' src={ Img } circle />
      </Col>
      <Col xs={6} md={10}>
        { props.name }
      </Col>
    </Row>
  )
}

export default Footer;
