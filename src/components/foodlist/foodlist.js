import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.png';
import p3 from '../../assets/images/p3.png';


const Foodlist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const data = [
    { sl: 1, image: p1, categoryName: "Pizza", parentMenu: "Fast Food", status: "Active", vat: "0.000 %" },
    { sl: 2, image: p2, categoryName: "Burger", parentMenu: "Fast Food", status: "Active", vat: "0.000 %" },
    { sl: 3, image: p3, categoryName: "Pasta", parentMenu: "Italian", status: "Active", vat: "0.000 %" },
  ];

  const handleEdit = (id) => {
    alert(`Edit item with ID: ${id}`);
 
  };

  const handleDelete = (id) => {
    alert(`Delete item with ID: ${id}`);
  
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-house-fill me-2" style={{ fontSize: "1.5rem" }}></i>
        <h3 className="mb-0">Item Category</h3>
      </div>

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Food List</h4>
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
                  <th>Image</th>
                  <th>Food Name</th>
                  <th>Component</th>
                  <th>Vat</th> 
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.sl}>
                    <td>{row.sl}</td>
                    <td>
                      <img
                        src={row.image}
                        alt={row.categoryName}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                    <td>{row.categoryName}</td>
                    <td>{row.parentMenu}</td>
                    <td>{row.vat}</td> 
                    <td>{row.status}</td>
                    <td>
                      <i
                        className="bi bi-pencil-square text-primary me-3"
                        style={{ cursor: "pointer" }}
                        title="Edit"
                        onClick={() => handleEdit(row.sl)}
                      ></i>
                      <i
                        className="bi bi-trash-fill text-danger"
                        style={{ cursor: "pointer" }}
                        title="Delete"
                        onClick={() => handleDelete(row.sl)}
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

export default Foodlist;
