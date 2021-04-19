import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { moveAidContext } from "../../../../App";

const Book = () => {
  const localURL = "http://localhost:5000";
  const { loggedInUser, setLoggedInUser } = useContext(moveAidContext);

  useEffect(() => {
    const serviceId = sessionStorage.getItem("serviceId");

    fetch(`${localURL}/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServiceOption(data));
  }, []);

  const [serviceOption, setServiceOption] = useState({});
  const [name, setName] = useState(loggedInUser.name);
  const [email, setEmail] = useState(loggedInUser.email);
  const [serviceName, setServiceName] = useState("");
  const [weight, setWeight] = useState(1);
  const [serviceCharge, setServiceCharge] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const bookedService = {
      name,
      email,
      serviceName: serviceOption.serviceName
        ? serviceOption.serviceName
        : serviceName,
      serviceCharge: serviceOption.serviceCharge
        ? Number(weight * serviceOption.serviceCharge)
        : Number(weight * serviceCharge),
      status: "pending",
    };

    fetch(`${localURL}/addNewBooking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookedService),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="m-4">
      <Container
        style={{ maxWidth: "40rem" }}
        className="m-4 p-4 border shadow"
      >
        <Alert variant="info" className="text-center">
          <h5>Book</h5>
        </Alert>
        <Form onSubmit={submitHandler}>
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
                  placeholder=""
                  value={serviceOption.serviceName}
                  onChange={(e) => {
                    setServiceName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Weight"
                  value={weight}
                  min={1}
                  onChange={(e) => {
                    setWeight(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Service Charge (/kg)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder=""
                  value={Number(weight * serviceOption.serviceCharge)}
                  onChange={(e) => {
                    setServiceCharge(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <p>Payment: Credit Card only</p>

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
