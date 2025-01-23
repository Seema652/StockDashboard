import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePageCustomization = () => {
  return (
    <div className="container my-4 ">
      {/* Save Button at the Top */}
      <div className="d-flex justify-content-center mb-4">
        <button className="btn btn-primary">Save</button>
      </div>

      {/* Menu Section */}
      <div className="card mb-4">
        <div className="card-header">Menu</div>
        <div className="card-body">
          <button className="btn btn-outline-secondary me-2">Home</button>
          <button className="btn btn-outline-secondary me-2">My Profile</button>
          <button className="btn btn-outline-secondary me-2">Request</button>
          <button className="btn btn-outline-secondary">Suggestion</button>
        </div>
      </div>

      {/* Dashboard Selector */}
      <div className="card mb-4 p-3 text-center">
        <h5 className="mb-3">Dashboard</h5>
        <div className="d-flex justify-content-center">
          <select className="form-select w-25">
            <option>Select Dashboard</option>
            <option>Dashboard 1</option>
            <option>Dashboard 2</option>
          </select>
        </div>
      </div>

      {/* OR Divider */}
      <div className="text-center mb-3">
        <strong>(OR)</strong>
      </div>

      {/* Widget Section */}
      <div className="card mb-4">
        <div className="card-header">Widget</div>
        <div className="card-body">
          <div className="row">
            {/* Alert Widget */}
            <div className="col-md-6 mb-3">
              <div className="card bg-light">
                <div className="card-body">
                  <h6 className="card-title text-center">Alerts</h6>
                  <p className="text-center">Alerts</p>
                  <div className="d-flex justify-content-center">
                    <input type="checkbox" className="form-check-input me-2" />
                    <span className="me-3">Active</span>
                    <a className="btn btn-primary shadow btn-xs sharp me-1">
                <i className="fa fa-pencil"></i>
              </a>
              <a className="btn btn-danger shadow btn-xs sharp me-1">
                <i className="fa fa-trash"></i>
              </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages and Notifications Widget */}
            <div className="col-md-6 mb-3">
              <div className="card bg-light">
                <div className="card-body">
                  <h6 className="card-title text-center">Messages and Notifications</h6>
                  <p className="text-center">Show the message and notifications</p>
                  <div className="d-flex justify-content-center">
                    <input type="checkbox" className="form-check-input me-2" />
                    <span className="me-3">Active</span>
                    <a className="btn btn-primary shadow btn-xs sharp me-1">
                <i className="fa fa-pencil"></i>
              </a>
              <a className="btn btn-danger shadow btn-xs sharp me-1">
                <i className="fa fa-trash"></i>
              </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button at the Bottom */}
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  );
};

export default HomePageCustomization;
