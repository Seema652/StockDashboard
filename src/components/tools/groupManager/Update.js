import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./siderbar";
import { useNavigate } from "react-router-dom";

const UpdateManager = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const accounts = [
    { name: "Test Page 3", type: "Facebook page", icon: "T" },
    { name: "Test Page 2", type: "Facebook page", icon: "T" },
    { name: "Tiến Phạm", type: "Instagram profile", icon: "P" },
    { name: "Group Test", type: "Facebook group", icon: "G" },
    { name: "TEST PAGE", type: "Facebook page", icon: "T" },
    { name: "Tiến Phạm", type: "Facebook profile", icon: "P" },
    { name: "Phạm Đức Tiến", type: "Twitter profile", icon: "P" },
    { name: "Jadiny", type: "Thời trang thiết kế cho bé", icon: "J" },
  ];

  const filteredAccounts = accounts.filter((account) =>
    account.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex">
      <div style={{ width: "280px", minHeight: "100vh", position: "relative" }}>
        <Sidebar />
      </div>
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="row justify-content-center w-100">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-lg p-4">
              <div className="d-flex align-items-center mb-4 bg-black p-3 text-white rounded">
                <FaUsers size={30} className="me-2" />
                <h3 className="mb-0">Group Manager</h3>
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input type="text" id="title" className="form-control" placeholder="Enter title" />
              </div>
              <div className="mb-3">
                <label htmlFor="search" className="form-label">
                  Select accounts
                </label>
                <input
                  type="text"
                  id="search"
                  className="form-control"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="border p-2 rounded" style={{ height: "350px", overflowY: "auto" }}>
                {filteredAccounts.map((account, index) => (
                  <div key={index} className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
                    <div className="d-flex align-items-center">
                      <div
                        className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2"
                        style={{ width: "40px", height: "40px", fontSize: "1rem" }}
                      >
                        {account.icon}
                      </div>
                      <div>
                        <strong>{account.name}</strong>
                        <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                          {account.type}
                        </div>
                      </div>
                    </div>
                    <input type="checkbox" className="form-check-input" />
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-secondary"  onClick={() => navigate("/groupmanager")}>Back</button>
                <button className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateManager;
