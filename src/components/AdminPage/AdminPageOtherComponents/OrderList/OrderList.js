import React from "react";
import { Alert, Table } from "react-bootstrap";
import Select from "react-select";

const OrderList2 = () => {
  const orderListData = [
    {
      name: "Sufi Ahmed Hamim",
      email: "sufi@gmail.com",
      service: "Local Moving",
      payment: 10,
      value: "pending",
    },
    {
      name: "Sufi Ahmed Hamim",
      email: "sufi@gmail.com",
      service: "Local Moving",
      payment: 10,
      value: "done",
    },
    {
      name: "Sufi Ahmed Hamim",
      email: "sufi@gmail.com",
      service: "Local Moving",
      payment: 10,
      value: "on going",
    },
    {
      name: "Sufi Ahmed Hamim",
      email: "sufi@gmail.com",
      service: "Local Moving",
      payment: 10,
      value: "pending",
    },
    {
      name: "Sufi Ahmed Hamim",
      email: "sufi@gmail.com",
      service: "Local Moving",
      payment: 10,
      value: "done",
    },
  ];

  const options = [
    { value: "pending", label: "Pending" },
    { value: "done", label: "Done" },
    { value: "on going", label: "On going" },
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
          {orderListData.map((data, index) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.service}</td>
              <td>$ {data.payment}</td>
              <td style={{ width: "200px" }}>
                <Select defaultValue={options[0]} options={options} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList2;
