import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const Testimonial = () => {
  const localURL = "http://localhost:5000";
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    fetch(`${localURL}/reviews`)
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, [localURL]);

  return (
    <div className="mt-5">
      <Container className="m-auto">
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
        <Row className="gx-5">
          {allReviews.map((review, index) => (
            <Col sm={12} md={4} key={index}>
              <div
                className="p-3 border bg-light shadow rounded"
                style={{ height: "300px" }}
              >
                <Row className="d-flex justify-content-center align-items-center">
                  <Col>
                    <Image
                      src={review.image}
                      style={{ width: "100px" }}
                      className="p-1"
                    />
                  </Col>
                  <Col>
                    <Row>
                      <h4>{review.name}</h4>
                      <h6>Service:{review.serviceName}</h6>
                    </Row>
                    <Row>{review.rate}</Row>

                    {Array(review.rate)
                      .fill()
                      .map((_, i) => (
                        <span>
                          <StarBorderIcon />
                        </span>
                      ))}
                  </Col>
                </Row>
                <Row className="mt-4 p-2 text-justify">
                  <p>{review.description}</p>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
