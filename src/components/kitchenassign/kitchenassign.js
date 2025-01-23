import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrash, FaHome } from "react-icons/fa";

const KitchenAssign = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [data, setData] = useState([
    { sl: 1, kitchenName: "Chinese", user: "Dorathy Mclain" },
    { sl: 2, kitchenName: "Maxican", user: "Kabir Khan" },
    { sl: 3, kitchenName: "Beverage", user: "John Maria" },
    { sl: 4, kitchenName: "MAIN", user: "John Carlos" },
    { sl: 5, kitchenName: "Italian", user: "Hassan Mahmu" },
  ]);
  const [newUser, setNewUser] = useState("");
  const [newKitchenName, setNewKitchenName] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.kitchenName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = () => {
    if (newUser && newKitchenName) {
      const newEntry = {
        sl: data.length + 1,
        kitchenName: newKitchenName,
        user: newUser,
      };
      setData([...data, newEntry]);
      setNewUser("");
      setNewKitchenName("");
    } else {
      alert("Please select both User and Kitchen Name!");
    }
  };

  const handleDelete = (sl) => {
    const updatedData = data.filter((item) => item.sl !== sl);
    setData(updatedData);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <FaHome className="me-2" style={{ fontSize: "1.5rem" }} />
        <h3 className="mb-0">Kitchen Setting</h3>
      </div>

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Kitchen Assign</h4>
          
          </div>
          <div className="card-body">
        
            <div className="d-flex justify-content-center align-items-center mb-4">
              <div className="d-flex align-items-center me-3">
                <label htmlFor="userSelect" className="me-2">
                  User:
                </label>
                <select
                  id="userSelect"
                  className="form-select"
                  value={newUser}
                  onChange={(e) => setNewUser(e.target.value)}
                  style={{ width: "200px" }}
                >
                  <option value="">Select User</option>
                  <option value="Dorathy Mclain">Dorathy Mclain</option>
                  <option value="Kabir Khan">Kabir Khan</option>
                  <option value="John Maria">John Maria</option>
                  <option value="John Carlos">John Carlos</option>
                  <option value="Hassan Mahmu">Hassan Mahmu</option>
                </select>
              </div>
              <div className="d-flex align-items-center me-3">
                <label htmlFor="kitchenSelect" className="me-2">
                  Kitchen Name:
                </label>
                <select
                  id="kitchenSelect"
                  className="form-select"
                  value={newKitchenName}
                  onChange={(e) => setNewKitchenName(e.target.value)}
                  style={{ width: "200px" }}
                >
                  <option value="">Select Kitchen Name</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Maxican">Maxican</option>
                  <option value="Beverage">Beverage</option>
                  <option value="MAIN">MAIN</option>
                  <option value="Italian">Italian</option>
                </select>
              </div>
              <button className="btn btn-success" onClick={handleSave}>
                Save
              </button>
            </div>

        
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
                  <th>Kitchen Name</th>
                  <th>Assigned User</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sl}</td>
                    <td>{row.kitchenName}</td>
                    <td>{row.user}</td>
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

export default KitchenAssign;
