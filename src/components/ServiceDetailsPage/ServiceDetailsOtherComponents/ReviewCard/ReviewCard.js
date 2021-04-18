import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";

const ReviewCard = () => {
  const localURL = "http://localhost:5000";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [serviceName, setServiceName] = useState("");
  const [rate, setRate] = useState(5);
  const [description, setDescription] = useState("");

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "66ea3518e768c4f5a746330cb26f8d92");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => setImage(res.data.data.display_url));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newReview = {
      name,
      email,
      image,
      serviceName,
      rate,
      description,
    };

    fetch(`${localURL}/addNewReview`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Review submitted");
      });
  };

  return (
    <Container className="px-5 m-5">
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image (Optional)</Form.Label>

          <Form.Control
            type="file"
            placeholder="Enter image"
            onChange={handleImageUpload}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Service you have used</Form.Label>
          <Form.Control
            type="text"
            placeholder="Service name"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>How would you like to rate it?</Form.Label>
          <Form.Control
            as="select"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ReviewCard;
