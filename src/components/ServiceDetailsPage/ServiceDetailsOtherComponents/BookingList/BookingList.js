import React from "react";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import StoreIcon from "@material-ui/icons/Store";
import { Container, Button, Col, Row } from "react-bootstrap";

const BookingList = () => {
  const serviceData = [
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
    <Container className="px-3 mt-5">
      <Row className="gx-3">
        {serviceData.map((data) => (
          <Col sm={12} md={4}>
            <div
              className="p-4 border bg-light shadow rounded"
              style={{ height: "100%" }}
            >
              <Row className="d-flex justify-content-around align-items-center">
                <data.icon style={{ fontSize: "40px" }} />
                <Button>pending</Button>
              </Row>
              <br />
              <Row>
                <Col>
                  <h5>{data.title}</h5>
                  <p>{data.description}</p>
                </Col>
              </Row>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookingList;
