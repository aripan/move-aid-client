import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import pack from "../../../images/package.png";
import bgWall from "../../../images/bg-wall.jpg";

const About = () => {
  return (
    <div
      className="m-5"
      style={{
        backgroundImage: `url(${bgWall})`,
      }}
    >
      <Container className="p-4">
        <Row className="d-flex align-items-center m-2">
          <Col sm={12} md={6}>
            <Image style={{ height: "300px" }} src={pack} fluid />
          </Col>
          <Col sm={12} md={6}>
            <h1>Hello, Welcome to moveAid!!!</h1>
            <div
              style={{
                color: "#4B0082",
                fontWeight: "600",
                fontStyle: "italic",
              }}
            >
              <p style={{ fontSize: "18px" }}>
                Why Us? <br /> Let us tell you our special features...
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>

              <ul>
                <li>Your requirement is our wish</li>
                <li>Moving is quick and easy</li>
                <li>We are affordable</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
