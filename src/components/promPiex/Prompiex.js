import React from "react";
import {
  FaSearch,
  FaPlus,
  FaUser,
  FaSignOutAlt,
  FaTrash,
  FaBars,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Proxies() {
  const navigate = useNavigate();


  const handleDelete = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      alert("Proxy deleted successfully!");

    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4 bg-black p-2 rounded text-white flex-wrap">
        <h3>Proxies</h3>
        <div className="d-flex align-items-center flex-nowrap gap-2" style={{ width: "auto" }}>
          <div className="input-group" style={{ maxWidth: "250px", flexGrow: 1 }}>
            <input type="text" className="form-control" placeholder="Search" />
            <span className="input-group-text">
              <FaSearch />
            </span>
          </div>
          <button className="btn btn-primary" onClick={() => navigate("/prompiexs/update")}> <FaPlus /> </button>
          <button className="btn btn-warning"  > <FaUser /> </button>
          <button className="btn btn-danger" onClick={()=> navigate("/importprompiex")}> <FaSignOutAlt /> </button>
          <button className="btn btn-danger" onClick={handleDelete}> <FaTrash /> </button>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Proxy</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>171.248.222.102:1080</td>
                  <td>Viet Nam</td>
                  <td>
                    <button className="btn btn-secondary btn-sm">Disable</button>
                  </td>
                  <td>26/01/2024 10:09 AM</td>
                  <td>
                    <button className="btn btn-light">
                      <FaBars />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>171.248.215.207:1080</td>
                  <td>Viet Nam</td>
                  <td>
                    <button className="btn btn-secondary btn-sm">Disable</button>
                  </td>
                  <td>26/01/2024 10:10 AM</td>
                  <td>
                    <button className="btn btn-light">
                      <FaBars />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>80.169.243.234:1080</td>
                  <td>United Kingdom</td>
                  <td>
                    <button className="btn btn-secondary btn-sm">Disable</button>
                  </td>
                  <td>26/01/2024 10:10 AM</td>
                  <td>
                    <button className="btn btn-light">
                      <FaBars />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <nav className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link">&laquo;</button>
          </li>
          <li className="page-item active">
            <button className="page-link">1</button>
          </li>
          <li className="page-item">
            <button className="page-link">&raquo;</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Proxies;
