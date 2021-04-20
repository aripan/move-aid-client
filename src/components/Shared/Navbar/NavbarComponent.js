import React, { useContext, useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { HashLink } from "react-router-hash-link";
import { moveAidContext } from "../../../App";
import { logout } from "../../LoginPage/LoginPageOtherComponents/LoginManager/LoginManager";

const NavbarComponent = () => {
  const localURL = "http://localhost:5000";
  const { loggedInUser, setLoggedInUser } = useContext(moveAidContext);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogout = () => {
    setLoggedInUser(logout());
  };

  useEffect(() => {
    if (loggedInUser.email) {
      const admin = {
        email: loggedInUser.email,
      };
      fetch(`${localURL}/isAdmin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.admin);
        });
    }
  }, [loggedInUser.email]);
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>moveAid</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/home">
            <Nav.Link className="mr-2">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link className="mr-2">About Us</Nav.Link>
          </LinkContainer>

          {/* <HashLink
            smooth
            to="/home#contact"
            style={{ textDecoration: "none" }}
          >
            <Nav.Link className="mr-2">Contact Us</Nav.Link>
          </HashLink> */}

          <LinkContainer to="/serviceDetails">
            <Nav.Link className="mr-2">Dashboard</Nav.Link>
          </LinkContainer>
          {isAdmin && (
            <LinkContainer to="/admin">
              <Nav.Link className="mr-2">Admin</Nav.Link>
            </LinkContainer>
          )}

          {loggedInUser.email ? (
            <NavDropdown
              title={
                isAdmin ? `${loggedInUser.name}(Admin)` : `${loggedInUser.name}`
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link className="mr-2 ">Login</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
