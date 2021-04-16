import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const Book = () => {
  return (
    <Container className="px-5 m-5">
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
          <Form.Label>Service Name</Form.Label>
          <Form.Control type="text" placeholder="Service name" />
        </Form.Group>
        <p>Pay with</p>
        <Form.Group>
          <Form.Check inline type="radio" label="Credit Card" />
          <Form.Check inline type="radio" label="Paypal" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Book;
