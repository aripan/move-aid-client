import React, { useEffect, useState } from "react";
import { Alert, Table } from "react-bootstrap";
import Select from "react-select";

const OrderList = () => {
  const localURL = "http://localhost:5000";
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    fetch(`${localURL}/bookings`)
      .then((res) => res.json())
      .then((data) => setBookingData(data));
  }, []);

  const handleChange = (e, id) => {
    const newStatus = { status: e.value };

    console.log(newStatus, id);

    fetch(`${localURL}/updateBookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const options = [
    { value: "pending", label: "pending" },
    { value: "done", label: "done" },
    { value: "on going", label: "on going" },
  ];

  return (
    <div className=" m-3">
      <Alert variant="info" className="text-center">
        <h5>Order List</h5>
      </Alert>
      <Table striped bordered hover className="text-center">
        <thead style={{ backgroundColor: "black", color: "white" }}>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Service</th>
            <th>charge</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((booking, index) => (
            <tr>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.serviceName}</td>
              <td>$ {booking.serviceCharge}</td>
              <td style={{ width: "200px" }}>
                {booking.status}
                <Select
                  options={options}
                  onChange={(e) => {
                    handleChange(e, booking._id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
