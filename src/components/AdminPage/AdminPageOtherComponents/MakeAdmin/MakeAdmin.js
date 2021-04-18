import React from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

const MakeAdmin = () => {
  return (
    <Container className="px-5 m-5">
      <Alert variant="info" className="text-center">
        <h5>Make Admin</h5>
      </Alert>
      <Form>
        <Alert variant="info">
          <Row>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Enter email" />
            </Col>
            <Col sm={2}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Alert>
      </Form>
    </Container>
  );
};

export default MakeAdmin;
