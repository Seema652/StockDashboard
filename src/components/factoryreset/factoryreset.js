import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome } from "react-icons/fa";

const Note = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <FaHome className="me-2" style={{ fontSize: "1.5rem" }} />
        <h3 className="mb-0">Factory Reset</h3>
      </div>

      <div className="card">
        <div className="card-body">
          <div
            className="alert alert-info text-center"
            style={{
              backgroundColor: "#cce5ff",
              borderColor: "#b8daff",
              width: "60%",
              margin: "0 auto",
            }}
          >
            <strong>Note:</strong> Strongly recommended to backup your SOURCE
            FILE and DATABASE before Reset. Factory Reset will remove all your
            transactional data.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
