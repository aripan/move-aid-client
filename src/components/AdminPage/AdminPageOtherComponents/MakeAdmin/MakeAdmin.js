import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const MakeAdmin = () => {
  return (
    <Form>
      <Container className="px-5 m-5">
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
      </Container>
    </Form>
  );
};

export default MakeAdmin;
