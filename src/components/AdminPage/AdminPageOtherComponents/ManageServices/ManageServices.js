import React, { useEffect, useState } from "react";
import { Alert, Image, Table } from "react-bootstrap";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditService from "../EditService/EditService";

const ManageServices = () => {
  const localURL = "http://localhost:5000";
  const [serviceOptions, setServiceOptions] = useState([]);
  const [editableService, setEditableService] = useState({});

  useEffect(() => {
    fetch(`${localURL}/services`)
      .then((res) => res.json())
      .then((data) => setServiceOptions(data));
  }, [localURL, setServiceOptions]);

  const handleEditOption = (id) => {
    const findServiceToEdit = serviceOptions.find((pd) => pd._id === id);
    setEditableService(findServiceToEdit);

    fetch(`${localURL}/services`)
      .then((res) => res.json())
      .then((data) => setServiceOptions(data));
  };

  const handleDeleteOption = (id) => {
    const deleteURL = `${localURL}/deleteService/${id}`;
    fetch(deleteURL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const filteredServices = serviceOptions.filter(
            (service) => service._id !== id
          );
          setServiceOptions(filteredServices);
        }
      });
  };

  return (
    <div className="px-4 m-5">
      {editableService.serviceName ? (
        <EditService editableService={editableService}></EditService>
      ) : (
        <Alert variant="danger" className="text-center">
          <h4>Manage Services</h4>
        </Alert>
      )}
      <Table striped bordered hover className="mt-5 text-center">
        <thead style={{ backgroundColor: "black", color: "white" }}>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>description</th>
            <th>service charge</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {serviceOptions.map((service) => (
            <tr>
              <td>
                <Image
                  src={service.image}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{service.serviceName}</td>
              <td>{service.description}</td>
              <td>${service.serviceCharge}</td>
              <td>
                <EditOutlinedIcon
                  onClick={() => {
                    handleEditOption(service._id);
                  }}
                  style={{ cursor: "pointer" }}
                  color="primary"
                />
                <br />
                <br />
                <DeleteForeverOutlinedIcon
                  onClick={() => {
                    handleDeleteOption(service._id);
                  }}
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
