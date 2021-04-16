import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { HashLink } from "react-router-hash-link";

const NavbarComponent = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand href="#home">moveAid</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/home">
            <Nav.Link className="mr-2">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link className="mr-2">About Us</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/services">
            <Nav.Link className="mr-2">Services</Nav.Link>
          </LinkContainer>
          <HashLink
            smooth
            to="/home#contact"
            style={{ textDecoration: "none" }}
          >
            <Nav.Link className="mr-2">Contact Us</Nav.Link>
          </HashLink>
          <LinkContainer to="/admin">
            <Nav.Link className="mr-2">Admin</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link className="mr-2 ">Login</Nav.Link>
          </LinkContainer>

          <NavDropdown title="Username(Admin)" id="basic-nav-dropdown">
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
