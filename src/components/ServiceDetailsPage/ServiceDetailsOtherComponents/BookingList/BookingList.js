import React, { useEffect, useState } from "react";
import { Container, Alert, Table } from "react-bootstrap";

const BookingList = () => {
  const hostedURL = "https://infinite-mountain-73117.herokuapp.com";
  // const localURL = "http://localhost:5000";
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    fetch(`${hostedURL}/bookings`)
      .then((res) => res.json())
      .then((data) => setBookingData(data));
  }, []);

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
            {bookingData.map((booking) => (
              <tr>
                <td>{booking.serviceName}</td>
                <td>$ {booking.serviceCharge}</td>
                <td>Credit Card</td>
                <td
                  style={{
                    color:
                      booking.status === "done"
                        ? "#006400"
                        : booking.status === "on going"
                        ? "#9932CC"
                        : "red",
                  }}
                >
                  {booking.status}
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
