import React from "react";
import Sidebar from "./siderbar";
import { BiBox } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Groupmanager() {
  const navigate = useNavigate();
  return (
    <div className="d-flex vh-100">
      <Sidebar />
      <div className="flex-grow-1 d-flex justify-content-center align-items-center p-3">
        <div className="text-center w-100 mx-auto">
          <BiBox className="img-fluid" style={{ width: "150px", height: "150px" }} color="black" />
          <div className="mt-3">
          <button 
              className="btn btn-primary w-100" 
              style={{ maxWidth: "200px", borderRadius: "20px", padding: "10px 20px", fontSize: "16px" }}
              onClick={() => navigate('/update')}
            >
              + Add New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groupmanager;
