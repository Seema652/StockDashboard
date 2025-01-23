import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrash, FaHome, FaCheck, FaTimes, FaFileInvoice, FaInfoCircle } from "react-icons/fa";

const TodayOrder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]); // Empty data

  const filteredData = data.filter(
    (item) =>
      item.invoice.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.waiter.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.paymentStatus.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (sl) => {
    const updatedData = data.filter((item) => item.sl !== sl);
    setData(updatedData);
  };

  const totalAmount = filteredData.reduce((sum, item) => sum + item.amount, 0);
  const totalRows = filteredData.length;

  return (
    <div className="container mt-4">
      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Today Order</h4>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="text-center">
                <button className="btn btn-dark me-2">Copy</button>
                <button className="btn btn-dark me-2">CSV</button>
                <button className="btn btn-dark me-2">Excel</button>
                <button className="btn btn-dark me-2">PDF</button>
                <button className="btn btn-dark">Print</button>
                <button className="btn btn-dark">Column Visibility</button>
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
                  <th>No</th>
                  <th>Invoice</th>
                  <th>Customer Name</th>
                  <th>Customer Type</th>
                  <th>Waiter</th>
                  <th>Table No</th>
                  <th>Order Date</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.sl}</td>
                      <td>{row.invoice}</td>
                      <td>{row.customerName}</td>
                      <td>{row.customerType}</td>
                      <td>{row.waiter}</td>
                      <td>{row.tableNo}</td>
                      <td>{new Date(row.orderDate).toLocaleDateString()}</td> 
                      <td>{row.amount.toFixed(2)}</td> 
                      <td>
                        <FaInfoCircle
                          className="text-secondary me-2"
                          style={{ cursor: "pointer" }}
                          title="Details"
                        />
                        <FaTrash
                          className="text-danger"
                          style={{ cursor: "pointer" }}
                          title="Delete"
                          onClick={() => handleDelete(row.sl)}
                        />
                        <FaEdit
                          className="text-primary me-2"
                          style={{ cursor: "pointer" }}
                          title="Update"
                        />
                        <FaFileInvoice
                          className="text-info me-2"
                          style={{ cursor: "pointer" }}
                          title="POS Invoice"
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center">
                      No Data Available
                    </td>
                  </tr>
                )}
              </tbody>
             
              <tfoot>
                <tr>
                  <td colSpan="7" className="text-center">
                    Total:
                  </td>
                  <td colSpan="2" className="text-center">
                    {totalAmount.toFixed(2)} (0.00 total)
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayOrder;
