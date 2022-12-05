import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6} className=' d-flex flex-row align-items-center text-light'>
            <img src={logo} alt="Logo" />
            <h1>Hany Shaker</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
