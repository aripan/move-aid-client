import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import headerImg from "../../../../images/header-img.jpg";

const HeaderMain = () => {
  return (
    <div className="d-flex align-items-center m-5">
      <Row>
        <Col md={6}>
          <Image src={headerImg} fluid />
        </Col>
        <Col className="d-flex align-items-center" md={6}>
          <div>
            <h2>
              Find out why we are <br /> #1 moving company
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>

            <HashLink
              smooth
              to="/home#contact"
              style={{ textDecoration: "none" }}
            >
              <Button variant="outline-primary">Get In Touch</Button>
            </HashLink>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderMain;
