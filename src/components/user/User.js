import React, { useState } from "react";
import Sidebar from "./sidebar"; // Import Sidebar
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaPlus, FaTrash, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const User = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
     
      alert("Item successfully deleted.");
    }
  };

  return (
    <div className="d-flex">
  
      <Sidebar />

   
      <div className="flex-grow-1" style={{ marginLeft: "250px", padding: "20px" }}>
        <div className="container-fluid">
          <div className="row align-items-center mb-4 mt-5">
            <div className="col-md-4">
              <h2>
                <FaUsers className="me-2" /> Users
              </h2>
            </div>
            <div className="col-md-8 d-flex justify-content-end">
              <div className="d-flex align-items-center">
                <div className="position-relative me-3">
                  <FaSearch
                    className="position-absolute"
                    style={{
                      left: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 1,
                    }}
                  />
                  <input
                    type="text"
                    className="form-control ps-5"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearch}
                    style={{ width: "250px" }}
                  />
                </div>
                <button className="btn btn-primary me-2"
                onClick={() => navigate("/user/update")}
                >
                  <FaPlus className="me-1" />
                </button>
                <button className="btn btn-danger"  onClick={handleDelete}>
                  <FaTrash className="me-1" />
                </button>
              </div>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th>USER</th>
                    <th>ADMIN</th>
                    <th>ROLE</th>
                    <th>PLAN</th>
                    <th>EXPIRATION DATE</th>
                    <th>LOGIN TYPE</th>
                    <th>STATUS</th>
                    <th>CREATED</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="9" className="text-center">
                      No users available.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
