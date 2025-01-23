import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrash, FaHome } from "react-icons/fa";

const BankList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [data, setData] = useState([
    {
      sl: 1,
      bankName: "Axis Bank",
      accountName: "Axis India Ltd",
      accountNumber: "8080505020201010",
      branch: "Ahmedabad",
      balance: 2081008,
      signaturePicture: "",
    },
    {
      sl: 2,
      bankName: "Brac Bank",
      accountName: "",
      accountNumber: "",
      branch: "",
      balance: -2885990,
      signaturePicture: "",
    },
    {
      sl: 3,
      bankName: "City Bank",
      accountName: "",
      accountNumber: "",
      branch: "",
      balance: -217608,
      signaturePicture: "",
    },
    {
      sl: 4,
      bankName: "Dutch-Bangla Bank",
      accountName: "",
      accountNumber: "",
      branch: "",
      balance: -1060,
      signaturePicture: "",
    },
  ]);

  const filteredData = data.filter(
    (item) =>
      item.bankName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.accountName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (sl) => {
    const updatedData = data.filter((item) => item.sl !== sl);
    setData(updatedData);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <FaHome className="me-2" style={{ fontSize: "1.5rem" }} />
        <h3 className="mb-0">Bank List</h3>
      </div>
      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Bank List</h4>
            <button className="btn btn-primary">Add New Bank</button>
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
                  <th>Bank Name</th>
                  <th>A/C Name</th>
                  <th>A/C Number</th>
                  <th>Branch</th>
                  <th>Balance</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row) => (
                  <tr key={row.sl}>
                    <td>{row.sl}</td>
                    <td>{row.bankName}</td>
                    <td>{row.accountName}</td>
                    <td>{row.accountNumber}</td>
                    <td>{row.branch}</td>
                    <td>{row.balance}</td>
                    <td>
                      <FaEdit
                        className="text-primary me-2"
                        style={{ cursor: "pointer" }}
                        title="Edit"
                      />
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

export default BankList;
