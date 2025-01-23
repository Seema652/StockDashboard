import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AccessSettings = () => {
  return (
    <div className="container mt-4">
      {/* Save Button */}
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary">Save</button>
      </div>

      {/* General Settings Header */}
      <h5 className="mb-3">General Settings</h5>

      {/* Form Section */}
      <form>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Portal Name</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" value="RealEstate" />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Default Created by</label>
          <div className="col-sm-9">
            <select className="form-select">
              <option>Select User</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Default Request Status</label>
          <div className="col-sm-9">
            <select className="form-select">
              <option>Select Status</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Default Request Priority</label>
          <div className="col-sm-9">
            <select className="form-select">
              <option>Select Priority</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">User Listview Layout</label>
          <div className="col-sm-9">
            <select className="form-select">
              <option></option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Password Policy</label>
          <div className="col-sm-9">
            <select className="form-select">
              <option>Select Policy</option>
            </select>
          </div>
        </div>

        {/* Checkbox Section */}
        <div className="row mb-3">
          <div className="col-sm-9 offset-sm-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Send Mail on Change Password</label>
            </div>
          </div>
        </div>

        {/* Radio Buttons */}
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Request View Type</label>
          <div className="col-sm-9">
            <div className="form-check">
              <input type="radio" name="viewType" className="form-check-input" checked />
              <label className="form-check-label">Thread View</label>
            </div>
            <div className="form-check">
              <input type="radio" name="viewType" className="form-check-input" />
              <label className="form-check-label">List View Paging Alignment</label>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Notifications Interval</label>
          <div className="col-sm-9 d-flex">
            <input type="number" className="form-control" defaultValue="0" />
            <span className="ms-2 align-self-center">Minutes</span>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Customer Portal URL</label>
          <div className="col-sm-9">
            <a href="http://centrahub199.centrahubcrm.com/in/streamline/portal/RealEstate/login.do">
              http://admin@barginguru.com
            </a>
          </div>
        </div>

        {/* Additional Checkboxes */}
        <div className="row mb-3">
          <div className="col-sm-9 offset-sm-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">
                Allow contacts to view all request from their organization (Account)
              </label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">
                Allow customers to sign up to customer portal
              </label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">
                Automatically invite customers when first request is registered against them
              </label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Contact is created against them</label>
            </div>
          </div>
        </div>

        {/* Login Section */}
        <h6 className="mt-4">Login based on</h6>
        <div className="row mb-3">
          <div className="col-sm-9 offset-sm-3">
            <div className="form-check">
              <input type="radio" name="loginType" className="form-check-input" checked />
              <label className="form-check-label">Contact Email and Password</label>
            </div>
            <div className="form-check">
              <input type="radio" name="loginType" className="form-check-input" />
              <label className="form-check-label">Custom Field(s)</label>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Module</label>
          <div className="col-sm-9 d-flex">
            <select className="form-select">
              <option>Select Module</option>
            </select>
            <button className="btn btn-light ms-2">+</button>
          </div>
        </div>

        {/* Save Button */}
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AccessSettings;
