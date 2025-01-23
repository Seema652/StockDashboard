import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import { FaHome } from "react-icons/fa";

const Floorlist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([
    { sl: 1, tableName: "Table-2M", capacity: 12 },
    { sl: 2, tableName: "Table-V7", capacity: 4 },
    { sl: 3, tableName: "Table-V6", capacity: 10 },
    { sl: 4, tableName: "Table-V8", capacity: 13 },
  ]);

  const navigate = useNavigate();  // Initialize navigate function
  
  // Handler for the "Table List" button click
  const handleTableListClick = () => {
    navigate("/");  // Navigate back to the TableList page
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <FaHome className="me-2" style={{ fontSize: "1.5rem" }} />
        <h3 className="mb-0">Restaurant Floor</h3>
      </div>

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Floor List</h4>
            <div>
              <button className="btn btn-primary me-2" onClick={handleTableListClick}>
                Table List
              </button>
            </div>
          </div>
          <div className="card-body">
            <table className="table table-bordered table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Sl</th>
                  <th>Table Name</th>
                  <th>Capacity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.sl}>
                    <td>{row.sl}</td>
                    <td>{row.tableName}</td>
                    <td>{row.capacity}</td>
                    <td>
                      <button>Edit</button>
                      <button>Delete</button>
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

export default Floorlist;
