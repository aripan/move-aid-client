import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HomeService = () => {
  const hostedURL = "https://infinite-mountain-73117.herokuapp.com";
  // const localURL = "http://localhost:5000";
  const [serviceOptions, setServiceOptions] = useState([]);

  useEffect(() => {
    fetch(`${hostedURL}/services`)
      .then((res) => res.json())
      .then((data) => setServiceOptions(data));
  }, [hostedURL]);

  const handleBookNow = (id) => {
    sessionStorage.setItem("serviceId", id);
  };

  return (
    <div className="text-center mt-5 ">
      <Container>
        <Row className="mb-5">
          <Col>
            <h3>
              Welcome to <br /> OUR SERVICES
            </h3>
            <p>
              With professional movers, we provide the following services at
              affordable rates,
              <br /> to suit your pocket and sooth your mind
            </p>
          </Col>
        </Row>
        <Row className="m-auto">
          {serviceOptions.map((service, index) => (
            <Col sm={12} md={4} key={index}>
              <Card style={{ width: "14rem" }}>
                <Card.Img src={service.image} style={{ height: "200px" }} />
                <Card.Body>
                  <Card.Title>{service.serviceName}</Card.Title>
                  <Card.Text style={{ color: "gray", fontStyle: "italic" }}>
                    {service.description}
                  </Card.Text>
                  <LinkContainer to="/serviceDetails">
                    <Button
                      variant="outline-primary"
                      onClick={() => {
                        handleBookNow(service._id);
                      }}
                    >
                      Book Now
                    </Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeService;
