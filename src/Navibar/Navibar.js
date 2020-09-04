import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import image from './cloudOnsync.png'

const navibar = () =>{

    return (
        <div>
         <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="primary" variant="dark">
      <ReactBootStrap.Navbar.Brand href="#home"><img
        src={image}
        width="100"
        height="37"
        className="d-inline-block align-top"
       //alt="React Bootstrap logo"
      /></ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
      <ReactBootStrap.Nav className="mr-auto">
        <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
        <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <ReactBootStrap.NavDropdown.Item href="#action/3.1" >Action</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Divider />
          <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
      </ReactBootStrap.Nav>
      <ReactBootStrap.Nav>
        <ReactBootStrap.Nav.Link href="#deets">About Us</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
          Contact Us
        </ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Navbar>
        </div>
      );
}

export default navibar;