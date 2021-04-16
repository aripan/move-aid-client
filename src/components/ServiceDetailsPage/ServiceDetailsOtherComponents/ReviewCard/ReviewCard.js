import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const ReviewCard = () => {
  return (
    <Container className="px-5 m-5">
      <Form>
        <Form.Group>
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Service you have used</Form.Label>
          <Form.Control type="text" placeholder="Service name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>How would you like to rate it?</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ReviewCard;
