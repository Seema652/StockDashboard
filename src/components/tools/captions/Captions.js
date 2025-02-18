import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiBox } from "react-icons/bi";
import { FaSearch, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Captions() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container-fluid mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4 bg-black p-3 rounded text-white">
        <h3 className="mb-2 mb-sm-0">Caption</h3>
        <div className="d-flex align-items-center ms-auto">
          <div className="position-relative" style={{ width: "150px" }}> 
            <FaSearch
              className="position-absolute"
              style={{
                left: "10px", 
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
              style={{ width: "100%" }}  
            />
          </div>
          <button
            className="btn btn-primary ms-2"
            onClick={() => navigate("/caption/update")}
          >
            <FaPlus className="me-1" />
          </button>
        </div>
      </div>

      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{
          textAlign: "center",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <BiBox size={150} color="black" />
        <button
          className="btn btn-primary mt-3"
          style={{
            borderRadius: "20px",
            padding: "10px 20px",
            fontSize: "16px",
          }}
          onClick={() => navigate("/caption/update")}
        >
          + Add New
        </button>
      </div>
    </div>
  );
}

export default Captions;
