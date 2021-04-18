import React from "react";
import { Table } from "react-bootstrap";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

const ManageServices = () => {
  const serviceData = [
    {
      id: 1,
      title: "Local Moving",
      price: 100,
    },
    {
      id: 2,
      title: "Long Distance Moving",
      price: 100,
    },
    {
      id: 3,
      title: "Storage Unit",
      price: 100,
    },
  ];

  return (
    <div className="px-4 m-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {serviceData.map((data) => (
            <tr>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>${data.price}</td>
              <td>
                <EditOutlinedIcon
                  style={{ cursor: "pointer" }}
                  color="primary"
                />

                <DeleteForeverOutlinedIcon
                  style={{ cursor: "pointer" }}
                  color="secondary"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageServices;
