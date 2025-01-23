import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.png';
import p3 from '../../assets/images/p3.png';
import p4 from '../../assets/images/p4.png';
import p5 from '../../assets/images/p5.png';


const CategoryListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const data = [
    { sl: 1, image: p1, categoryName: "Pizza", parentMenu: "Fast Food", status: "Active" },
    { sl: 2, image: p2, categoryName: "Burger", parentMenu: "Fast Food", status: "Active" },
    { sl: 3, image: p3, categoryName: "Pasta", parentMenu: "Italian", status: "Active" },
    { sl: 4, image: p4, categoryName: "Biryani", parentMenu: "Indian", status: "Active" },
    { sl: 5, image: p5, categoryName: "Seafood", parentMenu: "Main Course", status: "Active" },
  
  ];  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-house-fill me-2" style={{ fontSize: "1.5rem" }}></i>
        <h3 className="mb-0">Item Category</h3>
      </div>

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Category List</h4>
          
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
                  <th>Category Name</th>
                  <th>Parent Menu</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sl}</td>
                    <td><img src={row.image} alt={row.categoryName} style={{ width: "50px", height: "50px" }} /></td>
                    <td>{row.categoryName}</td>
                    <td>{row.parentMenu}</td>
                    <td>{row.status}</td>
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

export default CategoryListPage;