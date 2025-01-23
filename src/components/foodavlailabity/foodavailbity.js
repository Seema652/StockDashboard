import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const FoodAvailbity = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const data = [
    {
      sl: 1,
      foodName: "Mexican Hot De Bayless",
      availableDay: "Friday",
      availableTime: "16:00-19:00",
    },
    {
      sl: 2,
      foodName: "Spicy Chicken",
      availableDay: "Wednesday",
      availableTime: "14:00-21:00",
    },
    {
      sl: 3,
      foodName: "Chana Aloo Masala",
      availableDay: "Tuesday",
      availableTime: "14:00-20:00",
    },
    {
      sl: 4,
      foodName: "Mutton Biryani",
      availableDay: "Monday",
      availableTime: "14:00-20:00",
    },
    {
      sl: 5,
      foodName: "Barcode Special Chicken",
      availableDay: "Saturday",
      availableTime: "15:00-21:00",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-house-fill me-2" style={{ fontSize: "1.5rem" }}></i>
        <h3 className="mb-0">Food Availability</h3>
      </div>

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Food Availability List</h4>
            <button className="btn btn-primary">Add Available Day & Time</button>
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
                  <th>Food Name</th>
                  <th>Available Day</th>
                  <th>Available Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sl}</td>
                    <td>{row.foodName}</td>
                    <td>{row.availableDay}</td>
                    <td>{row.availableTime}</td>
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

export default FoodAvailbity;
