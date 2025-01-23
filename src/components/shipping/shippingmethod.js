import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTruck, FaEdit, FaTrash } from "react-icons/fa";

const ShippingMethod = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const data = [
    { sl: 1, shippingMethodName: "Delivery", shippingRate: 5.00, status: "Active" },
    { sl: 2, shippingMethodName: "Pickup", shippingRate: 0.00, status: "Active" },
  ];

  const filteredData = data.filter(item =>
    item.shippingMethodName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExport = (format) => {
    console.log(`Exporting to ${format}`);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <FaTruck className="me-2" style={{ fontSize: "1.5rem" }} />
        <h3 className="mb-0">Shipping Methods</h3>
      </div>

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Shipping Method List</h4>
            <button className="btn btn-primary">
              <span className="me-2">+</span>
              Add Shipping Method
            </button>
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
                    onChange={(e) => setRecordsPerPage(Number(e.target.value))}
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
                <button className="btn btn-dark me-2" onClick={() => handleExport('copy')}>Copy</button>
                <button className="btn btn-dark me-2" onClick={() => handleExport('csv')}>CSV</button>
                <button className="btn btn-dark me-2" onClick={() => handleExport('excel')}>Excel</button>
                <button className="btn btn-dark me-2" onClick={() => handleExport('pdf')}>PDF</button>
                <button className="btn btn-dark" onClick={() => handleExport('print')}>Print</button>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: "200px" }}
                />
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Sl</th>
                    <th>Shipping Method</th>
                    <th> Shipping Rate</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.sl}</td>
                      <td>{row.shippingMethodName}</td>
                      <td>{row.shippingRate.toFixed(2)}</td>
                      <td>{row.status}</td>
                      <td>
                        <FaEdit className="text-primary me-3" style={{ cursor: "pointer" }} title="Edit" />
                        <FaTrash className="text-danger" style={{ cursor: "pointer" }} title="Delete" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
