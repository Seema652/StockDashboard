import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome } from 'react-icons/fa';

const KitchenSetting = () => {
  const [refreshTime, setRefreshTime] = useState(41);

  const handleSave = () => {
    alert(`Saved! Kitchen Refresh Time: ${refreshTime} seconds`);
  };

  return (
    <div className="container mt-5">
        <div className="d-flex align-items-center mb-3">
        <FaHome className="me-2" style={{ fontSize: '1.5rem' }} />
        <h3 className="mb-0">Kitchen Setting</h3>
      </div>
    <div className="card">
      <div className="card-header bg-dark text-center text-white">
        <h5 className="mb-0">Kitchen Setting</h5>
      </div>
      <div className="card-body">
        <form className="row align-items-center g-2">
          <label htmlFor="refreshTime" className="col-auto col-form-label">
            Kitchen Refresh Time in Seconds <span className="text-danger">*</span>
          </label>
          <div className="col-auto">
            <input
              type="number"
              className="form-control"
              id="refreshTime"
              value={refreshTime}
              onChange={(e) => setRefreshTime(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default KitchenSetting;
