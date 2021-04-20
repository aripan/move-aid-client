import React from "react";
import { Alert } from "react-bootstrap";

const NotFound = () => {
  return (
    <div className="m-5 p-5">
      <Alert variant="danger">
        <h4 className="text-center">No Match Sorry</h4>
      </Alert>
    </div>
  );
};

export default NotFound;
