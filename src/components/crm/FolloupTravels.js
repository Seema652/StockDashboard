import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FolloupTravel() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    leadType: "",
    leadStatus: "",
    followupStatus: "",
    search: "",
  });

  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        {/* Form Row */}
        <div className="row">
          <div className="col-md-2">
            <label>From:</label>
            <input
              type="date"
              name="from"
              className="form-control"
              value={formData.from}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-2">
            <label>To:</label>
            <input
              type="date"
              name="to"
              className="form-control"
              value={formData.to}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-2">
            <label>Lead Type:</label>
            <div className="position-relative">
              <select
                name="leadType"
                className="form-control"
                value={formData.leadType}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="Type 1">Type 1</option>
                <option value="Type 2">Type 2</option>
              </select>
              <span
                className="position-absolute top-50 end-0 translate-middle-y pe-3"
                style={{ pointerEvents: "none" }}
              >
                ▼
              </span>
            </div>
          </div>
          <div className="col-md-2">
            <label>Lead Status:</label>
            <div className="position-relative">
              <select
                name="leadStatus"
                className="form-control"
                value={formData.leadStatus}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
              </select>
              <span
                className="position-absolute top-50 end-0 translate-middle-y pe-3"
                style={{ pointerEvents: "none" }}
              >
                ▼
              </span>
            </div>
          </div>
          <div className="col-md-2">
            <label>Search:</label>
            <input
              type="text"
              name="search"
              className="form-control"
              placeholder="Search"
              value={formData.search}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-2 d-flex align-items-end justify-content-end">
            <button className="btn btn-primary me-2">View</button>
            <button className="btn btn-success">New</button>
          </div>
        </div>

        {/* Follow-up Status Row */}
        <div className="row mt-3">
          <div className="col-md-3">
            <label>Follow-up Status:</label>
            <select
              name="followupStatus"
              className="form-control"
              value={formData.followupStatus}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Follow-up</th>
            <th>Name</th>
            <th>Contact</th>
            <th>No. of Pax</th>
            <th>Lead Type</th>
            <th>Lead Status</th>
            <th>Next Follow-up</th>
            <th>Follow-up Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.name || "-"}</td>
              <td>{row.contact || "-"}</td>
              <td>{row.noOfPax || "-"}</td>
              <td>{row.leadType || "-"}</td>
              <td>{row.leadStatus || "-"}</td>
              <td>{row.nextFollowup || "-"}</td>
              <td>{row.followupStatus || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FolloupTravel;
