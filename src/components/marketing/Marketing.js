import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import { FaRedo, FaEllipsisV, FaTable, FaEye, FaBullhorn } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import Createsegment from "./Createsegment"; 

const Marketing = () => {
  const [showCreateSegment, setShowCreateSegment] = useState(false); 

  const breadCrumbsTitle = {
    id: "1",
    title_2: "CRM",
    title_3: "Marketing",
  };

  
  const handleStep2Click = () => {
    setShowCreateSegment(true); 
  };

  return (
    <div>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      {!showCreateSegment ? (
        <div
          className="container mt-5 p-4"
          style={{
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            width: "95%",
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4 bg-black p-3 rounded flex-wrap">
            <div
              className="p-3 text-white text-center mb-3 mb-lg-0"
              style={{ width: "200px" }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "6px",
                  padding: "10px",
                }}
              >
                Step 1
                <br />
                Add Channel
              </div>
            </div>

   
            <div
              className="p-3 text-white text-center mb-3 mb-lg-0"
              style={{ width: "200px", cursor: "pointer" }}
              onClick={handleStep2Click} 
            >
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "6px",
                  padding: "10px",
                }}
              >
                Step 2
                <br />
                Create Segment
              </div>
            </div>

            <div
              className="p-3 text-white text-center mb-3 mb-lg-0"
              style={{ width: "200px" }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "6px",
                  padding: "10px",
                }}
              >
                Step 3
                <br />
                Create Campaign
              </div>
            </div>

            <button className="btn btn-primary">View Campaign</button>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div
                className="p-3"
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  width: "70%",
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6>All Users</h6>
                  <div className="d-flex align-items-center">
                    <FaRedo className="me-3" />
                    <FiAlertCircle />
                    <FaEllipsisV />
                  </div>
                </div>
                <h2 className="text-center">435</h2>
                <p className="text-center mb-4">Users</p>
                <div
                  className="d-flex justify-content-between"
                  style={{
                    borderTop: "1px solid #ddd",
                    paddingTop: "10px",
                  }}
                >
                  <div>
                    <FaEye /> View
                  </div>
                  <div>
                    <FaTable /> Excel
                  </div>
                  <div>
                    <FaBullhorn /> Campaign
                  </div>
                </div>
              </div>
            </div>

            <div
              className="p-3"
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                width: "35%",
              }}
            >
              <div
                className="p-3 text-center"
                style={{
                  border: "2px dashed lightblue",
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    backgroundColor: "lightblue",
                    color: "white",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "20px",
                    marginBottom: "10px",
                  }}
                >
                  +
                </div>
                <h6>Add Segment</h6>
                <p>Please Choose Your Users By Selecting Various Criteria</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Createsegment /> 
      )}
    </div>
  );
};

export default Marketing;
