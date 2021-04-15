import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EditIcon from "@material-ui/icons/Edit";

const Footer = () => {
  return (
    <div className="mt-5 bg-dark text-white">
      <Container>
        <Row className="pt-4 pb-4">
          <Col>
            <h1 className="text-white pb-2">MoveAid</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperioresculpa facere natus nemo, fugiat impedit.
            </p>
            <p>
              <LocationOnIcon /> Uttara, Dhaka, Bangladesh
            </p>
            <p>
              <CallIcon /> +123-456-7890
            </p>
            <p>
              <EditIcon /> moveaid@gmail.com
            </p>
            <div>
              <Row className="p-3">
                <Col>
                  <FacebookIcon style={{ fontSize: "30px" }} />
                </Col>
                <Col>
                  <TwitterIcon style={{ fontSize: "30px" }} />
                </Col>
                <Col>
                  <YouTubeIcon style={{ fontSize: "30px" }} />
                </Col>
              </Row>
            </div>
          </Col>
          <Col>
            <h1 className="text-white pb-2">Contact Us</h1>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>

                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="success" type="submit">
                Send
              </Button>
            </Form>
          </Col>
          <Col>
            <h1 className="text-white pb-2">Quick Links</h1>
            <p>Terms & conditions</p>
            <p>Sales</p>
            <p>Our blog</p>
            <div>
              <p>
                Wanna always be updates?
                <strong>
                  <em>Subscribe</em>
                </strong>
              </p>

              <Form.Group>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
