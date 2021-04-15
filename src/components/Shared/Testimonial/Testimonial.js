import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import customer1 from "../../../images/customer1.png";
import customer2 from "../../../images/customer2.png";
import customer3 from "../../../images/customer3.png";

const Testimonial = () => {
  const testimonialData = [
    {
      image: customer1,
      name: "John Deo",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresculpa facere natus nemo, fugiat impedit.",
    },
    {
      image: customer2,
      name: "Winson Herry",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresculpa facere natus nemo, fugiat impedit.",
    },
    {
      image: customer3,
      name: "Jane Deo",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresculpa facere natus nemo, fugiat impedit.",
    },
  ];

  return (
    <div>
      <Container className="mt-5" style={{ border: "1px solid red" }}>
        <Row>
          <div className="d-flex justify-content-between">
            <div>
              <h5>TESTIMONIAL</h5>
              <h2>
                What's Our Customers <br /> Says
              </h2>
            </div>
          </div>
        </Row>
        <Row>
          {testimonialData.map((data, index) => (
            <Col sm={12} md={4} key={index}>
              <Row className="d-flex justify-content-center align-items-center">
                <Col>
                  <Image src={data.image} style={{ width: "100px" }} />
                </Col>
                <Col>
                  <Row>
                    <h5>{data.name}</h5>
                  </Row>
                  <Row>5 star</Row>
                </Col>
              </Row>
              <Row>
                <p>{data.comment}</p>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
