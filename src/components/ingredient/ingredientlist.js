import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrash, FaHome } from "react-icons/fa";

const IngredientList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [data, setData] = useState([
    { sl: 1, ingredientName: "chilli", unitName: "Kilogram" },
    { sl: 2, ingredientName: "black olive", unitName: "Kilogram" },
    { sl: 3, ingredientName: "mashroom", unitName: "Kilogram" },
    { sl: 4, ingredientName: "capsicum", unitName: "Kilogram" },
    { sl: 5, ingredientName: "Chicken", unitName: "Kilogram" },
  ]);

  const filteredData = data.filter(item =>
    item.ingredientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.unitName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (sl) => {
    const updatedData = data.filter((item) => item.sl !== sl);
    setData(updatedData);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <FaHome className="me-2" style={{ fontSize: "1.5rem" }} />
        <h3 className="mb-0">Ingredients</h3>
      </div>

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Ingredient List</h4>
            <button className="btn btn-primary">Add Ingredient</button>
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
                  <th>Ingredient Name</th>
                  <th>Unit Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sl}</td>
                    <td>{row.ingredientName}</td>
                    <td>{row.unitName}</td>
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

export default IngredientList;