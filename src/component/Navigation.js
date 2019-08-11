import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Navigation extends Component {

  render()
  {
    return (

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
           <NavLink to = "/">Home</NavLink>
           <NavLink to = "/post">Post</NavLink>
           <NavLink to = "/table">Table</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
 
}

export default Navigation;


