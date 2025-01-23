import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Createsegment() {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div
        className="card p-4"
        style={{
          width: "1000px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <h2 className="mb-4 text-left">Add Segment</h2>


        <div className="mb-3 d-flex justify-content-center">
          <div className="d-flex flex-column align-items-center" style={{ width: "80%" }}>
            <div className="d-flex justify-content-between w-100">
              <label htmlFor="segmentName" className="form-label">
                Customer Segment Name <span className="text-danger">*</span>:
              </label>
              <input
                type="text"
                id="segmentName"
                className="form-control"
                placeholder="Enter Name"
                style={{ width: "70%" }} 
              />
            </div>
          </div>
        </div>

       
        <div className="mb-3 d-flex justify-content-center">
          <div className="d-flex flex-column align-items-center" style={{ width: "80%" }}>
            <div className="d-flex justify-content-between w-100">
              <label htmlFor="chooseFilter" className="form-label">
                Choose Filters <span className="text-danger">*</span>:
              </label>
              <select
                id="chooseFilter"
                className="form-select"
                style={{ width: "70%" }} 
              >
                <option value="">Select Option</option>
                <option value="">Order Type</option>
                <option value="">Come From</option>
                <option value="">Visited(Time)</option>
                <option value="">Not Visited(In Days)</option>
                <option value="">Visited(In Days)</option>
                <option value="">Order Amount</option>        
              </select>
            </div>
          </div>
        </div>    
        <div className="d-flex justify-content-center mb-3">
          <button className="btn btn-primary">And</button>
        </div>
    <div
          className="d-flex justify-content-between align-items-center p-2"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "6px",
          }}
        >
          <p className="m-0" style={{ color: "white" }}>
            <small>Note: This filter would use the last 12 months.</small>
          </p>
          <div>
            <button className="btn btn-secondary me-2">Cancel</button>
            <button className="btn btn-danger">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createsegment;
