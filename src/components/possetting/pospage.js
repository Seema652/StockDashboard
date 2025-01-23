import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Settings = () => {
  return (
    <div className="container mt-4">

      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-house-fill me-2" style={{ fontSize: "1.5rem" }}></i>
        <h3 className="mb-0">Order List</h3>
      </div>
      <hr />

      <div className="mb-4">
        <h5 className="mb-3">Place Order Setting</h5>
        <div className="d-flex flex-wrap align-items-center mb-2">
          <div className="form-check me-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="waiter1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="waiter1">
              Waiter
            </label>
          </div>
          <div className="form-check me-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="table1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="table1">
              Table
            </label>
          </div>
          <div className="form-check me-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="cookingTime1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="cookingTime1">
              Cooking Time
            </label>
          </div>
          <div className="form-check me-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="tableMap1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="tableMap1">
              Table Map
            </label>
          </div>
          <div className="form-check me-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="soundEnable1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="soundEnable1">
              Is Sound Enable
            </label>
          </div>
        </div>
        <hr />
      </div>

      <div>
        <h5 className="mb-3">Quick Order Setting</h5>
        <div className="d-flex flex-wrap align-items-center mb-2">
          <div className="form-check me-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="waiter2"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="waiter2">
              Waiter
            </label>
          </div>
          <div className="form-check me-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="table2"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="table2">
              Table
            </label>
          </div>
          <div className="form-check me-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="cookingTime2"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="cookingTime2">
              Cooking Time
            </label>
          </div>
          <div className="form-check me-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="tableMap2"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="tableMap2">
              Table Map
            </label>
          </div>
          <div className="form-check me-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="soundEnable2"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="soundEnable2">
              Is Sound Enable
            </label>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Settings;
