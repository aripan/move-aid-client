import React from "react";
import { Container, Alert, Table } from "react-bootstrap";

const BookingList = () => {
  const serviceData = [
    {
      serviceName: "Local Moving",
      serviceCharge: 10,
      paidWith: "Credit Card",
      status: "pending",
    },
    {
      serviceName: "Local Moving",
      serviceCharge: 10,
      paidWith: "Credit Card",
      status: "done",
    },
    {
      serviceName: "Local Moving",
      serviceCharge: 10,
      paidWith: "Credit Card",
      status: "on going",
    },
  ];

  return (
    <div className="m-5">
      <Alert variant="info" className="text-center m-3">
        <h5>Booking List</h5>
      </Alert>
      <Container className="px-3 mt-5">
        <Table striped bordered hover className="text-center">
          <thead style={{ backgroundColor: "black", color: "white" }}>
            <tr>
              <th>Service Name</th>
              <th>Service Charge</th>
              <th>Paid with</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {serviceData.map((data) => (
              <tr>
                <td>{data.serviceName}</td>
                <td>$ {data.serviceCharge}</td>
                <td>{data.paidWith}</td>
                <td
                  style={{
                    color:
                      data.status === "done"
                        ? "#006400"
                        : data.status === "on going"
                        ? "#9932CC"
                        : "red",
                  }}
                >
                  {data.status}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default BookingList;
