import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFolder,
  FaCloudUploadAlt,
  FaSave,
  FaFileCsv,
  FaDatabase,
  FaThLarge,
  FaRocket,
  FaUser,
  FaSearch,
  FaChevronDown,
  FaUsers,
} from "react-icons/fa";
import { Checkbox } from "antd";

function Bulkpost() {
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fileName, setFileName] = useState("SELECT MEDIA");
  const fileInputRef = useRef(null);

  const accounts = [
    { id: 1, name: "Test Page 3", type: "Facebook page" },
    { id: 2, name: "Test Page 2", type: "Facebook page" },
    { id: 3, name: "Group Test", type: "Facebook group" },
    { id: 4, name: "TEST PAGE", type: "Facebook page" },
    { id: 5, name: "Jadiny", type: "Google business profile" },
    { id: 6, name: "Tiến Phạm", type: "Instagram profile" },
    { id: 7, name: "Tien Pham", type: "LinkedIn profile" },
    { id: 8, name: "Stackposts", type: "Other profile" },
  ];

  const handleAccountSelection = (id) => {
    setSelectedAccounts((prev) =>
      prev.includes(id)
        ? prev.filter((accountId) => accountId !== id)
        : [...prev, id]
    );
  };

  const filteredAccounts = accounts.filter((account) =>
    account.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        <FaRocket size={"1.875em"} /> Bulk Post
      </h1>
      <p className="text-center mb-5">
        Schedule hundreds of posts in just a few clicks
      </p>
      <div className="card p-4 shadow-lg border-0 rounded"
        style={{ maxWidth: "80.625em", margin: "auto", position: "relative" }}>
        <div className="form-group mb-4">
          <label className="mb-3 font-weight-bold">Select Accounts</label>
          <div
            className="am-selected-box rounded border p-3 d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer", width: "100%" }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="d-flex align-items-center">
              <FaUser className="text-secondary me-2" />
              <div className="am-selected-list">
                {selectedAccounts.length === 0 ? (
                  <span className="am-selected-empty">
                    Please select a profile
                  </span>
                ) : (
                  <div className="selected-accounts">
                    {selectedAccounts.map((id) => {
                      const account = accounts.find((acc) => acc.id === id);
                      return account ? (
                        <div key={id} className="d-flex align-items-center">
                          <FaUser className="me-2 text-primary" />
                          <div>
                            <span className="badge bg-primary m-1">
                              {account.name}
                            </span>
                            <div
                              className="text-muted"
                              style={{ fontSize: "0.75em" }}
                            >
                              {account.type}
                            </div>
                          </div>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}
              </div>
            </div>
            <FaChevronDown className="text-secondary" />
          </div>
          {isDropdownOpen && (
            <div
              className="dropdown-menu show mt-2 p-2 text-center"
              style={{
                maxHeight: "23.25em",
                border: "1px solid #ddd",
                width: "96.5%",
               
              }}
            >
              <div
                className="d-flex align-items-center p-2 border-bottom"
                style={{
                  position: "sticky",
                  top: 0,
                  background: "white",
                  zIndex: 1,
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="ms-4 me-3 gap-3 d-flex justify-content-center align-items-center">
                  <FaSearch className=" text-secondary" />
                  <input type="checkbox" className="form-check-input" />
                  <FaUsers />
                </div>
              </div>

              <div style={{ maxHeight: "12.5em", overflowY: "auto" }}>
                {filteredAccounts.map((account) => (
                  <div
                    key={account.id}
                    className="d-flex justify-content-between align-items-center p-2 border-bottom"
                  >
                    <div className="d-flex align-items-center">
                      <FaUser className="me-2 text-primary" />
                      <div>
                        <span>{account.name}</span>
                        <div
                          className="text-muted"
                          style={{ fontSize: "0.75em" }}
                        >
                          {account.type}
                        </div>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={selectedAccounts.includes(account.id)}
                      onChange={() => handleAccountSelection(account.id)}
                    />
                  </div>
                ))}
              </div>
              <hr />
              <div className="p-0 d-flex justify-content-center align-items-center">
                <button className="btn btn-primary w-50">
                  Connect a Profile
                </button>
              </div>
            </div>
          )}
          <div className="form-group mb-4">
            <label className="mb-2 font-weight-bold">Media CSV file</label>
            <div
              className="border p-3 rounded mb-3 text-center bg-light"
              style={{ cursor: "pointer" }}
              onClick={() => fileInputRef.current.click()}
            >
              <p className="mb-0 text-muted">{fileName}</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              className="d-none"
              onChange={(e) =>
                setFileName(e.target.files[0]?.name || "SELECT MEDIA")
              }
            />
            <div className="d-flex flex-wrap gap-2">
              <button className="btn btn-light border d-flex align-items-center flex-grow-1 flex-sm-grow-0">
                <FaFolder className="me-2" /> File manager
              </button>
              <button className="btn btn-light border flex-grow-1 flex-sm-grow-0">
                <FaCloudUploadAlt />
              </button>
              <button className="btn btn-light border flex-grow-1 flex-sm-grow-0">
                <FaFileCsv />
              </button>
              <button className="btn btn-light border flex-grow-1 flex-sm-grow-0">
                <FaSave />
              </button>
              <button className="btn btn-light border flex-grow-1 flex-sm-grow-0">
                <FaDatabase />
              </button>
              <button className="btn btn-light border flex-grow-1 flex-sm-grow-0">
                <FaThLarge />
              </button>
            </div>
          </div>

          {/* Advanced Options Section */}
          <div className="form-group mb-3 mb-md-4">
            <h3>Advanced Options</h3>
            <label>URL Shortener</label>
            <input
              type="text"
              placeholder="URL Shortener"
              className="form-control mb-3"
            />
            <label htmlFor="quantity">Interval per post (minutes)</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="100"
              className="form-control form-control-sm"
              autoComplete="off"
            />
            <div className="bg-primary-light p-1 rounded mt-3">
              <p className="mt-3 text-muted">
                If your posts are scheduled for an incorrect time or empty, the
                system will automatically set the first post with the current
                time and the next posts follow an interval delay per post.
              </p>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between gap-2">
            <button className="btn btn-outline-primary">Bulk Template</button>
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bulkpost;