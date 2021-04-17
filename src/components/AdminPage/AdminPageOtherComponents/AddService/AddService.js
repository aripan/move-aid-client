import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddService = () => {
  return (
    <div>
      <Form>
        <Row className="m-5 border shadow">
          <Col sm={12} md={7}>
            <Form.Group>
              <Form.Label>Service Title</Form.Label>
              <Form.Control type="text" placeholder="Service name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Col>
          <Col sm={12} md={5}>
            <Form.Group>
              <Form.Label>Image</Form.Label>

              <Form.File />
            </Form.Group>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default AddService;
