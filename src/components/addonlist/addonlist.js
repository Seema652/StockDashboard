import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AddonList = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const data = [
    { sl: 1, addOnName: "Pepsi", price: 100.0, status: "Active" },
    { sl: 2, addOnName: "Sauce", price: 50.0, status: "Active" },
    { sl: 3, addOnName: "French Fries", price: 100.0, status: "Active" },
    { sl: 4, addOnName: "Tomato Sauce", price: 5.0, status: "Active" },
   
  ];

  const handleSearch = () => {
  
  };

  const handleReset = () => {
    setFromDate("");
    setToDate("");
    setSearchTerm("");
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-house-fill me-2" style={{ fontSize: "1.5rem" }}></i>
        <h3 className="mb-0">Add-ons List</h3>
      </div>

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Manage Add-ons</h4>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <label className="me-2">
                  Display
                  <select
                    className="form-select d-inline mx-2"
                    style={{ width: "80px", display: "inline-block" }}
                    value={recordsPerPage}
                    onChange={(e) => setRecordsPerPage(e.target.value)}
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  records per page
                </label>
              </div>
              <div className="text-center">
                <button className="btn btn-dark me-2">Copy</button>
                <button className="btn btn-dark me-2">CSV</button>
                <button className="btn btn-dark me-2">Excel</button>
                <button className="btn btn-dark me-2">PDF</button>
                <button className="btn btn-dark">Print</button>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: "150px" }}
                />
              </div>
            </div>
            <table className="table table-bordered table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Sl</th>
                  <th>Add-ons Name</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sl}</td>
                    <td>{row.addOnName}</td>
                    <td>{row.price.toFixed(2)}</td>
                    <td>{row.status}</td>
                    <td>
                      <i
                        className="bi bi-pencil-square text-primary me-3"
                        style={{ cursor: "pointer" }}
                        title="Edit"
                      ></i>
                      <i
                        className="bi bi-trash text-danger"
                        style={{ cursor: "pointer" }}
                        title="Delete"
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddonList;
