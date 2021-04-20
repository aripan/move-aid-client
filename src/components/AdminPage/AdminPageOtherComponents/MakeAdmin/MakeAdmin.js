import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

const MakeAdmin = () => {
  const hostedURL = "https://infinite-mountain-73117.herokuapp.com";
  // const localURL = "http://localhost:5000";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newAdmin = {
      name,
      email,
      admin: true,
    };

    fetch(`${hostedURL}/addNewAdminUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAdmin),
    })
      .then((res) => res.json())
      .then((data) => {
        data && setSuccessMessage(`${email} has been added as an Admin`);
      });
  };

  return (
    <Container className="px-5 m-5">
      <Alert variant="info" className="text-center">
        {successMessage ? successMessage : <h5>Make Admin</h5>}
      </Alert>
      <Form onSubmit={submitHandler} className="shadow">
        <Alert variant="info">
          <Row>
            <Col sm={12}>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Button variant="primary" type="submit" className="m-3 ">
              Submit
            </Button>
          </Row>
        </Alert>
      </Form>
    </Container>
  );
};

export default MakeAdmin;
