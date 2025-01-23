import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const MenuType = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const data = [
    {
      sl: 1,
      menuType: "Party",
      icon: "./application/modules/itemmanage/assets/images/2020-11-21/",
      action: "Action for Party",
    },
    {
      sl: 2,
      menuType: "Coffee",
      icon: "./application/modules/itemmanage/assets/images/2020-11-21/",
      action: "Action for Coffee",
    },
    {
      sl: 3,
      menuType: "Dinner",
      icon: "./application/modules/itemmanage/assets/images/2020-11-21/",
      action: "Action for Dinner",
    },
    {
      sl: 4,
      menuType: "Launch",
      icon: "./application/modules/itemmanage/assets/images/2020-11-21/",
      action: "Action for Launch",
    },
    {
      sl: 5,
      menuType: "Breakfast",
      icon: "./application/modules/itemmanage/assets/images/2020-11-21/",
      action: "Action for Breakfast",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-house-fill me-2" style={{ fontSize: "1.5rem" }}></i>
        <h3 className="mb-0">Item Food</h3>
      </div>

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Menu Type</h4>
            <button className="btn btn-primary">
              Add Menu Type
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
                  <th>Menu Type</th>
                  <th>Icon</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((row) =>
                    row.menuType
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  )
                  .map((row, index) => (
                    <tr key={index}>
                      <td>{row.sl}</td>
                      <td>{row.menuType}</td>
                      <td>
                        <img
                          src={row.icon}
                          alt={row.menuType}
                          style={{ width: "30px", height: "30px" }}
                        />
                      </td>
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

export default MenuType;
