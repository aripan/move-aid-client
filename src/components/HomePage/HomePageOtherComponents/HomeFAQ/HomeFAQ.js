import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import QuestionAnswerRoundedIcon from "@material-ui/icons/QuestionAnswerRounded";

const HomeFAQ = () => {
  const homeFAQData = [
    {
      Question: "Do you move unique or very lare items?",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresculpa facere natus nemo, fugiat impedit.",
    },
    {
      Question: "How do you take care of fragile items/antiques?",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresculpa facere natus nemo, fugiat impedit.",
    },
    {
      Question: "Can you pack my stuff or does it have to be packed?",
      Answer:
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
          {homeFAQData.map((data, index) => (
            <Col
              sm={12}
              md={3}
              key={index}
              style={{ height: "300px" }}
              className="border border-primary m-auto"
            >
              <QuestionAnswerRoundedIcon
                className="border border-success rounded-circle"
                style={{
                  fontSize: "50px",
                  transform: "translateY(-20px)",
                  color: "Green",
                }}
              />
              <div>
                <h5>{data.Question}</h5>
                <p className="text-secondary">{data.Answer}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeFAQ;
