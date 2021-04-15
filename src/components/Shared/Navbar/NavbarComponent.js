import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand href="#home">moveAid</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="mr-2">
            Home
          </Nav.Link>
          <Nav.Link href="#about" className="mr-2">
            About Us
          </Nav.Link>
          <Nav.Link href="#service" className="mr-2">
            Services
          </Nav.Link>
          <Nav.Link href="#contact" className="mr-2">
            Contact Us
          </Nav.Link>
          <Nav.Link href="#admin" className="mr-2">
            Admin
          </Nav.Link>
          <Nav.Link href="#login" className="mr-2 ">
            Login
          </Nav.Link>
          <NavDropdown title="Username(Admin)" id="basic-nav-dropdown">
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
