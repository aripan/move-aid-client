import React from "react";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import StoreIcon from "@material-ui/icons/Store";
import { Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HomeService = () => {
  const homeServiceData = [
    {
      icon: LocationCityIcon,
      title: "Local Moving",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresculpa facere natus nemo, fugiat impedit.",
    },
    {
      icon: PublicIcon,
      title: "Long Distance Moving",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresculpa facere natus nemo, fugiat impedit.",
    },
    {
      icon: StoreIcon,
      title: "Storage Unit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresculpa facere natus nemo, fugiat impedit.",
    },
  ];

  return (
    <div className="text-center mt-5 ">
      <Container>
        <Row>
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
        <Row className="mt-5">
          {homeServiceData.map((data, index) => (
            <Col sm={12} md={4} key={index} style={{ height: "300px" }}>
              <data.icon style={{ fontSize: "40px" }} />
              <div className="m-4">
                <h5>{data.title}</h5>
                <p className="text-secondary">{data.description}</p>
              </div>
              <LinkContainer to="/serviceDetails">
                <Button variant="outline-primary">Book Now</Button>
              </LinkContainer>
            </Col>
          ))}
        </Row>
        <br />
        <Row className="d-flex justify-content-center">
          <LinkContainer to="/services">
            <Button>Explore All</Button>
          </LinkContainer>
        </Row>
      </Container>
    </div>
  );
};

export default HomeService;
