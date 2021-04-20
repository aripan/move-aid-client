import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";

const AddService = () => {
  const hostedURL = "https://infinite-mountain-73117.herokuapp.com";
  // const localURL = "http://localhost:5000";
  const [serviceName, setServiceName] = useState("");
  const [serviceCharge, setServiceCharge] = useState(null);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

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

    const addedNewService = {
      serviceName,
      serviceCharge,
      description,
      image,
      updateTime: new Date(),
    };

    fetch(`${hostedURL}/addNewServices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedNewService),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Service added");
      });
  };

  return (
    <div className="m-4">
      <Container style={{ maxWidth: "40rem" }} className="mt-4">
        <Alert variant="info" className="text-center">
          <h5>Add Service</h5>
        </Alert>
        <Form onSubmit={submitHandler}>
          <Row className="m-auto p-4 border shadow">
            <Col sm={12} md={6}>
              <Form.Group>
                <Form.Label>Service Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Service name"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Service Charge (/kg)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="$ Service charge"
                  value={serviceCharge}
                  onChange={(e) => setServiceCharge(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image</Form.Label>

                <Form.Control
                  type="file"
                  placeholder="Enter image"
                  onChange={handleImageUpload}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
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

export default AddService;
