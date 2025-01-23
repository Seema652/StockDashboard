import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTable, FaTrash, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TableList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [data, setData] = useState([
    { sl: 1, tableName: "Table-2M", capacity: 12, icon: "" },
    { sl: 2, tableName: "Table-V7", capacity: 4, icon: "" },
    { sl: 3, tableName: "Table-V6", capacity: 10, icon: "" },
    { sl: 4, tableName: "Table-V8", capacity: 13, icon: "" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [tableName, setTableName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [floor, setFloor] = useState("");
  const [icon, setIcon] = useState("");
  
  const navigate = useNavigate();

  const filteredData = data.filter(item =>
    item.tableName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (sl) => {
    const updatedData = data.filter((item) => item.sl !== sl);
    setData(updatedData);
  };

  const handleAddFloorClick = () => {
    navigate("/floorlist");
  };

  const handleAddTableClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setTableName("");
    setCapacity("");
    setFloor("");
    setIcon("");
  };

  const handleAddTable = () => {
    const newTable = {
      sl: data.length + 1,
      tableName,
      capacity,
      icon
    };
    setData([...data, newTable]);
    handleModalClose();
  };

  const handleImageSelect = (selectedIcon) => {
    setIcon(selectedIcon);
    setShowImagePicker(false); // Close image picker
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <FaHome className="me-2" style={{ fontSize: "1.5rem" }} />
        <h3 className="mb-0">Restaurant Table</h3>
      </div>

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Table List</h4>
            <div>
              <button className="btn btn-primary me-2" onClick={handleAddFloorClick}>Add Floor</button>
              <button className="btn btn-primary" onClick={handleAddTableClick}>Add Table</button>
            </div>
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
                  <th>Table Name</th>
                  <th>Capacity</th>
                  <th>Icon</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sl}</td>
                    <td>{row.tableName}</td>
                    <td>{row.capacity}</td>
                    <td>{row.icon}</td>
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

      {/* Modal for adding table */}
      {showModal && (
        <div className="modal show d-block">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Table</h5>
                <button type="button" className="btn-close" onClick={handleModalClose}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="tableName" className="form-label">Table Name</label>
                  <input
                    type="text"
                    id="tableName"
                    className="form-control"
                    value={tableName}
                    onChange={(e) => setTableName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="capacity" className="form-label">Capacity</label>
                  <input
                    type="number"
                    id="capacity"
                    className="form-control"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="floor" className="form-label">Floor</label>
                  <select
                    id="floor"
                    className="form-select"
                    value={floor}
                    onChange={(e) => setFloor(e.target.value)}
                  >
                    <option value="">Select Floor</option>
                    {/* Add floor options here */}
                  </select>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label className="me-2">Icon</label>
                  <input
                    type="text"
                    className="form-control"
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                    style={{ width: "150px" }} // Reduced width
                  />
                  <button className="btn btn-secondary ms-2" onClick={() => setShowImagePicker(true)}>
                    Show
                  </button>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Reset</button>
                <button type="button" className="btn btn-primary" onClick={handleAddTable}>Add</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Picker Modal */}
      {showImagePicker && (
        <div className="modal show d-block" style={{ zIndex: 1050 }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Select Icon</h5>
                <button type="button" className="btn-close" onClick={() => setShowImagePicker(false)}></button>
              </div>
              <div className="modal-body">
                {/* Sample images for selection */}
                <div className="d-flex flex-wrap">
                  {["icon1.png", "icon2.png", "icon3.png"].map((iconPath, index) => (
                    <div
                      key={index}
                      className="m-2"
                      style={{ width: "60px", height: "60px", cursor: "pointer" }}
                      onClick={() => handleImageSelect(iconPath)}
                    >
                      <img src={`/path/to/icons/${iconPath}`} alt={`Icon ${index + 1}`} style={{ width: "100%", height: "100%" }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowImagePicker(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableList;
