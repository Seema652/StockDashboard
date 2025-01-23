import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SoundSetting = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-house-fill me-2" style={{ fontSize: "1.5rem" }}></i>
        <h3 className="mb-0">Order</h3>
      </div>
      <hr />

      <div className="card">
        <div className="card-body">
          <div
            className="d-flex justify-content-between align-items-center mb-3 p-3"
            style={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            <h5 className="mb-0">Sound Setting</h5>
            <div>
              <i className="bi bi-pencil-square me-3" title="Edit"></i>
              <i className="bi bi-pin-angle me-3" title="Unpin"></i>
              <i className="bi bi-arrow-clockwise me-3" title="Reload"></i>
              <i className="bi bi-dash me-3" title="Minimize"></i>
              <i
                className="bi bi-arrows-fullscreen me-3"
                title="Fullscreen"
              ></i>
              <i className="bi bi-x-lg" title="Close"></i>
            </div>
          </div>
          <hr />
          <div className="mb-3 d-flex align-items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="Notify Sound"
              className="me-3"
              style={{ width: "50px", height: "50px" }}
            />
            <label className="form-label mb-0">Upload Notification Sound</label>
          </div>
          <div className="mb-3" style={{ maxWidth: "300px" }}>
            <input
              type="file"
              className="form-control"
              style={{
                maxWidth: "100%",
              }}
            />
          </div>
          <button className="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  );
};

export default SoundSetting;
