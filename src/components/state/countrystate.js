import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrash, FaHome } from "react-icons/fa";

const CountryState = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [data, setData] = useState([
    { sl: 1, country: "Spain", state: "Alicante" },
    { sl: 2, country: "United Arab Emirates", state: "Abu Dhabi" },
    { sl: 3, country: "Brazil", state: "São Paulo" },
    { sl: 4, country: "India", state: "Maharashtra" },
    { sl: 5, country: "Thailand", state: "Bangkok" },
  ]);

  const filteredData = data.filter((item) =>
    item.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (sl) => {
    const updatedData = data.filter((item) => item.sl !== sl);
    setData(updatedData);
  };

  const handlePaginationChange = (e) => {
    setRecordsPerPage(Number(e.target.value));
  };


  const paginatedData = filteredData.slice(0, recordsPerPage);

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <FaHome className="me-2" style={{ fontSize: "1.5rem" }} />
        <h3 className="mb-0">Country List</h3>
      </div>
      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>State List</h4>
            <button className="btn btn-primary">Add Country</button>
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
                    onChange={handlePaginationChange}
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
              <div className="d-flex align-items-center">
                <label htmlFor="searchInput" className="me-2">
                  Search:
                </label>
                <input
                  id="searchInput"
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
                  <th>Country</th>
                  <th>State</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sl}</td>
                    <td>{row.country}</td>
                    <td>{row.state}</td>
                    <td>
                      <FaEdit
                        className="text-primary me-2"
                        style={{ cursor: "pointer" }}
                        title="Edit"
                      />
                      <FaTrash
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        title="Delete"
                        onClick={() => handleDelete(row.sl)}
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

export default CountryState;
