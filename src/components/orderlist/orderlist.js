import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const OrderList = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    { sl: 1, invoiceNo: 516, customerName: "jghgh ghigh", waiter: "", table: "", state: "Pending", orderDate: "2024-12-23", amount: 115.0 },
    { sl: 2, invoiceNo: 515, customerName: "jghgh ghigh", waiter: "", table: "", state: "Pending", orderDate: "2024-12-23", amount: 17.25 },
    { sl: 3, invoiceNo: 514, customerName: "jghgh ghigh", waiter: "", table: "", state: "Pending", orderDate: "2024-12-23", amount: 32.6 },
    { sl: 4, invoiceNo: 513, customerName: "Charlotte Sexton", waiter: "online order", table: "", state: "Pending", orderDate: "2024-12-23", amount: 2432.25 },
    { sl: 5, invoiceNo: 512, customerName: "jghgh ghigh", waiter: "", table: "", state: "Pending", orderDate: "2024-12-23", amount: 1265.0 },
   
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
        <h3 className="mb-0">Order List</h3>
      </div>
   
      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Order List</h4>
            <div className="d-flex">
              <input 
                type="date" 
                className="form-control me-2" 
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                style={{ width: "150px", cursor: 'pointer' }} 
              />
              <input 
                type="date" 
                className="form-control me-2" 
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                style={{ width: "150px", cursor: 'pointer' }} 
              />
              <button className="btn btn-success me-2" onClick={handleSearch}>Search</button>
              <button className="btn btn-danger" onClick={handleReset}>Reset</button>
            </div>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <button className="btn btn-dark me-2">Copy</button>
                <button className="btn btn-dark me-2">CSV</button>
                <button className="btn btn-dark me-2">Excel</button>
                <button className="btn btn-dark me-2">PDF</button>
                <button className="btn btn-dark me-2">Print</button>
                <button className="btn btn-dark">Column Visibility</button>
              </div>
              <div className="d-flex">
                <input 
                  type="text" 
                  className="form-control me-2" 
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
                  <th>Invoice No</th>
                  <th>Customer Name</th>
                  <th>Waiter</th>
                  <th>Table</th>
                  <th>State</th>
                  <th>Order Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sl}</td>
                    <td>{row.invoiceNo}</td>
                    <td>{row.customerName}</td>
                    <td>{row.waiter}</td>
                    <td>{row.table}</td>
                    <td>{row.state}</td>
                    <td>{row.orderDate}</td>
                    <td>{row.amount.toFixed(2)}</td>
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

export default OrderList;