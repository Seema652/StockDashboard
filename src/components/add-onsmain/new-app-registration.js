import React from "react";
import CustomInputField from "../../common/CustomInputField";
import { Link } from "react-router-dom";

function NewAppRegistration() {
  return (
    <div className="card">
      <div className="table-responsive active-projects style-1">
        <h2 className="tbl-caption text-light">New App Registration</h2>

        <div className="row">
          <div className="col-6">
            <label className="form-label font-weight-bold">General</label>
          </div>
        </div>
      </div>

      <form>
        <div className="mb-3">
          <label className="form-label">App Name</label>
          <CustomInputField />
        </div>

        <div className="mb-3 col-4">
          <label className="form-label">Phone</label>
          <CustomInputField />
        </div>

        <div className="mb-3 col-12">
          <label className="form-label">Description</label>
          <CustomInputField />
        </div>

        <div className="row">
          <div className="col-6">
            <label className="form-label font-weight-bold">
              OAuth Authorization
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Callback URL</label>
          <CustomInputField />
        </div>

        <div className="mb-3 col-4">
          <label className="form-label">App Scope</label>
          <ul>
            <li>
              <h5>Available List</h5>
            </li>
            <li>Full Access</li>
            <li>Read Only</li>
            <li>Basic User Information</li>
          </ul>
        </div>

        <div className="row">
          <div className="col-5">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            &nbsp;
            <label htmlFor="exampleCheck1" className="form-label">
              Mobile Native App Settings
            </label>
            <div className="mt-2">
              <label className="form-label">Device Type</label>
              <select className="form-select">
                <option>All</option>
                <option>Mobile</option>
                <option>Tablet</option>
              </select>
            </div>

            <div className="mt-2">
              <label className="form-label">Platform Type</label>
              <select className="form-select">
                <option>All</option>
                <option>IOS</option>
                <option>Android</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-5">
            <input
              type="checkbox"
              className="form-check-input"
              id="frameAppCheck"
            />
            &nbsp;
            <label htmlFor="frameAppCheck" className="form-label">
              Frame App
            </label>
            <div className="mt-2">
              <label className="form-label">URL</label>
              <CustomInputField />
            </div>
            <div className="mt-2">
              <label className="form-label">Location</label>
              <select className="form-select">
                <option>Menu</option>
                <option>Page Layout</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-5">
            <input
              type="checkbox"
              className="form-check-input"
              id="jsModuleCheck"
            />
            &nbsp;
            <label htmlFor="jsModuleCheck" className="form-label">
              JS Module
            </label>
            <div className="mt-2">
              <label className="form-label">JS Module URL</label>
              <CustomInputField />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <Link to="" className="btn btn-danger light ms-1">
            Cancel
          </Link>
          <button className="btn btn-primary me-1" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewAppRegistration;
