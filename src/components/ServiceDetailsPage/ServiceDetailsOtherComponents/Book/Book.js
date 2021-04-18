import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { moveAidContext } from "../../../../App";

const Book = () => {
  const localURL = "http://localhost:5000";
  const [loggedInUser, setLoggedInUser] = useContext(moveAidContext);
  const [serviceOption, setServiceOption] = useState({});
  const { serviceId } = useParams();
  const [name, setName] = useState(loggedInUser.name);
  const [email, setEmail] = useState(loggedInUser.email);
  const [serviceName, setServiceName] = useState("");
  const [weight, setWeight] = useState(1);
  const [serviceCharge, setServiceCharge] = useState(0);

  useEffect(() => {
    const serviceId = sessionStorage.getItem("serviceId");
    console.log(serviceId);
    fetch(`${localURL}/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServiceOption(data));
  }, []);

  return (
    <div className="m-4">
      <Container
        style={{ maxWidth: "40rem" }}
        className="m-4 p-4 border shadow"
      >
        <Alert variant="info" className="text-center">
          <h5>Book</h5>
        </Alert>
        <Form>
          <Row className="m-auto p-4 ">
            <Col sm={12} md={6}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Service Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Service name"
                  value={
                    serviceOption.serviceName
                      ? serviceOption.serviceName
                      : serviceName
                  }
                  onChange={(e) => {
                    setServiceName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Weight"
                  value={weight}
                  onChange={(e) => {
                    setWeight(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Service Charge (/kg)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="$ Service charge"
                  value={
                    serviceOption.serviceCharge
                      ? weight * serviceOption.serviceCharge
                      : serviceCharge
                  }
                  onChange={(e) => {
                    setServiceCharge(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <p>Pay with</p>
              <Form.Group>
                <Form.Check inline type="radio" label="Credit Card" />
                <Form.Check inline type="radio" label="Paypal" />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-4">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Book;
