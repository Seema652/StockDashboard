import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const AddoneAssign = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    {
      sl: 1,
      addOnsName: "Tomato Sauce",
      foodName: "Salmon Barbecue",
      action: "",
    },
    { sl: 2, addOnsName: "Butter", foodName: "Salmon Barbecue", action: "" },
    {
      sl: 3,
      addOnsName: "Frech fries",
      foodName: "Salmon Barbecue",
      action: "",
    },
    {
      sl: 4,
      addOnsName: "Frech fries",
      foodName: "Salmon Barbecue",
      action: "",
    },
    {
      sl: 5,
      addOnsName: "Tomato Sauce",
      foodName: "Salmon Barbecue",
      action: "",
    },
  ];

  const handleSearch = () => {
    // Implement search functionality if needed
  };

  const handleReset = () => {
    setFromDate("");
    setToDate("");
    setSearchTerm("");
  };

  const handleEdit = (sl) => {
    alert(`Edit item with Sl: ${sl}`);
  };

  const handleDelete = (sl) => {
    alert(`Delete item with Sl: ${sl}`);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-house-fill me-2" style={{ fontSize: "1.5rem" }}></i>
        <h3 className="mb-0">Menu Addons</h3>
      </div>

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Add-ons Assign List</h4>
            <div className="d-flex">
              <button className="btn btn-primary" onClick={handleReset}>
                Add-ons Assign
              </button>
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
                  <th>Add-ons Name</th>
                  <th>Food Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sl}</td>
                    <td>{row.addOnsName}</td>
                    <td>{row.foodName}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => handleEdit(row.sl)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(row.sl)}
                      >
                        <FaTrashAlt />
                      </button>
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

export default AddoneAssign;
