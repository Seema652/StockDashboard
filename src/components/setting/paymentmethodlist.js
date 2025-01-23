import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaCreditCard } from "react-icons/fa";

const PaymentMethod = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const data = [
    { sl: 1, paymentMethodName: "Nakit Ödeme", status: "Active" },
    { sl: 2, paymentMethodName: "Paytm Payments", status: "Active" },
    { sl: 3, paymentMethodName: "Paystack Payments", status: "Active" },
    { sl: 4, paymentMethodName: "Stripe Payment", status: "Active" },
    { sl: 5, paymentMethodName: "Square Payments", status: "Active" },
  ];

  const filteredData = data.filter(item =>
    item.paymentMethodName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <FaCreditCard className="me-2" style={{ fontSize: "1.5rem" }} />
        <h3 className="mb-0">Payment Methods</h3>
      </div>

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Payment Method List</h4>
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
                  <th>Payment Method Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sl}</td>
                    <td>{row.paymentMethodName}</td>
                    <td>{row.status}</td>
                    <td>
                      <FaEdit className="text-primary" style={{ cursor: "pointer" }} title="Edit" />
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

export default PaymentMethod;
