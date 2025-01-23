import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const CancelPage = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(10); 

  const data = [
    { sl: 1, orderId: 513, customerName: "Charlotte Sexton", customerType: "Online Customer", waiter: "online order", table: "", orderDate: "2024-12-23", amount: 2432.25 },
    { sl: 2, orderId: 512, customerName: "jghgh gjhgh", customerType: "Online Customer", waiter: "", table: "", orderDate: "2024-12-23", amount: 1265.0 },
    { sl: 3, orderId: 507, customerName: "Walkin", customerType: "Online Customer", waiter: "online order", table: "", orderDate: "2024-12-23", amount: 159.85 },
    { sl: 4, orderId: 489, customerName: "Kamal Hassan", customerType: "Dine In Customer", waiter: "Pravin Meshram", table: "Table-3", orderDate: "2024-12-22", amount: 460.0 },
    { sl: 5, orderId: 469, customerName: "Walkin", customerType: "Dine In Customer", waiter: "online order", table: "Table-V7", orderDate: "2024-12-20", amount: 230.0 },
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
        <h3 className="mb-0"> Order</h3>
      </div>

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Cancel Order</h4>
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
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Customer Type</th>
                  <th>Waiter</th>
                  <th>Table</th>
                  <th>Order Date</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sl}</td>
                    <td>{row.orderId}</td>
                    <td>{row.customerName}</td>
                    <td>{row.customerType}</td>
                    <td>{row.waiter}</td>
                    <td>{row.table}</td>
                    <td>{row.orderDate}</td>
                    <td>{row.amount.toFixed(2)}</td>
                    <td>
                      <i className="bi bi-eye text-info me-3" style={{ cursor: "pointer" }} title="View"></i>
                      <i className="bi bi-pencil-square text-primary" style={{ cursor: "pointer" }} title="Edit"></i>
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

export default CancelPage;
