import React from "react";
import { FaUserTie } from "react-icons/fa";

const ViewBrokersCom = () => {
  return (
    <div
      className="container  rounded-3"
      style={{ backgroundColor: "#ececec" }}
    >
      <div className="row">
        <div className="col-2 px-4 py-2 ">
          <div
            className="bg-light d-flex justify-content-center align-items-center rounded-4"
            style={{ height: '100%' }} // Ensures the div takes the full height of the column
          >
            <FaUserTie className="text-primary" size={100}  /> {/* Adjust size as needed */}
          </div>
        </div>
        <div className="col-9 p-3">
          <h4 className="border-bottom pb-2" style={{ color: "#F6A803" }}>
            Brokers
          </h4>
          <br />
          <span>Brokers</span>
          <div className="mt-2">
            <button className="btn btn-primary">Create</button>
            <button className="btn btn-outline-primary">Import</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBrokersCom;
