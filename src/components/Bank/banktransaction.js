import React from "react";
import {
  FaAndroid,
  FaEdit,
  FaThumbtack,
  FaSync,
  FaMinus,
  FaExpand,
  FaTimes,
  FaHome // Importing FaHome icon
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const AppSettings = () => {
  return (
    <div className="container mt-5">
      {/* Updated Header Section */}
      <div className="d-flex align-items-center mb-3">
        <FaHome className="me-2" style={{ fontSize: '1.5rem' }} />
        <h3 className="mb-0">Bank List</h3>
      </div>

      <div className="card mt-3">
        <div
          className="card-header d-flex align-items-center justify-content-between"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <div className="d-flex align-items-center"></div>
          <div className="d-flex align-items-center gap-2">
            <FaEdit title="Edit" style={{ color: "white" }} />
            <FaThumbtack title="Pin" style={{ color: "white" }} />
            <FaSync title="Reload" style={{ color: "white" }} />
            <FaMinus title="Minimize" style={{ color: "white" }} />
            <FaExpand title="Fullscreen" style={{ color: "white" }} />
            <FaTimes title="Close" style={{ color: "white" }} />
          </div>
        </div>

        <div className="card-body">
          <div className="d-flex flex-row align-items-center justify-content-center gap-4">
            <div className="d-flex flex-row">
              <div className="card text-center mx-2" style={{ width: "300px", height: "80px" }}>
                <div className="card-body d-flex align-items-center justify-content-center">
                  <p className="mb-0">QR Scan</p>
                </div>
              </div>

              <div className="card text-center mx-2" style={{ width: "300px", height: "80px" }}>
                <div className="card-body d-flex align-items-center justify-content-center">
                  <p className="mb-0">QR Scan</p>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column align-items-center">
              <FaAndroid size={40} className="text-success my-2" />
              <FaAndroid size={40} className="text-success my-2" />
              <FaAndroid size={40} className="text-success my-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-3">
        <div
          className="card-header d-flex align-items-center justify-content-between"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <div className="d-flex align-items-center">
            <div className="me-2" style={{ color: "white" }} />
            <h5 className="m-0">App Setting</h5>
          </div>
          <div className="d-flex align-items-center gap-2">
            <FaEdit title="Edit" style={{ color: "white" }} />
            <FaThumbtack title="Pin" style={{ color: "white" }} />
            <FaSync title="Reload" style={{ color: "white" }} />
            <FaMinus title="Minimize" style={{ color: "white" }} />
            <FaExpand title="Fullscreen" style={{ color: "white" }} />
            <FaTimes title="Close" style={{ color: "white" }} />
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="localUrl" className="form-label">
                Your Local Host Full URL
              </label>
              <input
                type="url"
                className="form-control"
                id="localUrl"
                placeholder="https://example.com/"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="onlineUrl" className="form-label">
                Your Online URL
              </label>
              <input
                type="url"
                className="form-control"
                id="onlineUrl"
                placeholder="https://example.com/"
              />
            </div>

            <p className="m-0">Skype: bdtask</p>
            <p className="m-0">Email: business@bdtask.com</p>
            <div className="d-flex justify-content-end">
              <button type="reset" className="btn btn-secondary me-2">
                Reset
              </button>
              <button type="submit" className="btn btn-success">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppSettings;
