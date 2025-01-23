import React from "react";
import { Link } from "react-router-dom";

function OutLooks() {
  return (
    <div className="card">
      <div className="table-responsive active-projects style-1">
        <h2 className="tbl-caption text-light">Outlook Integration Setting</h2>

        <div className="row ml-4">
          <div className="col-6">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            &nbsp;
            <lable className=""> Enable outlook sync</lable>
          </div>
        </div>
      </div>
      &nbsp;
      <h4>Contacts</h4>
      <div className="row">
        <div className="col-12">
          <input
            type="radio"
            class="form-check-input mr-2"
            id="exampleCheck1"
            name="day"
          />
          &nbsp; &nbsp;
          <label className="">
            Create account with Contact info when account info is missing
          </label>
        </div>
        <div className="col-12">
          <input
            type="radio"
            class="form-check-input mr-2"
            id="exampleCheck1"
            name="day"
          />
          &nbsp; &nbsp;
          <label className=""> Sync contacts to account</label>
          <div className="col-6">
            <input
              type="checkbox"
              class="form-check-input mr-2"
              id="exampleCheck1"
            />
            &nbsp; &nbsp;
            <label className=""> Overwrite user outlook settings</label>
            <div className="col-6">
              {" "}
              &nbsp;
              <select className="form-select">
                <option>AbbVie</option>
                <option>ABM Industries</option>
                <option>Air Products & Chemicals</option>
                <option>Alphabet</option>
                <option>Bed Bath & Beyond</option>
                <option>BorgWarner</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      &nbsp;
      <h4>Tasks</h4>
      &nbsp;
      <div className="row">
        <ul>
          <li>
            <h5>Available Status</h5>
          </li>
          <li>Missed</li>
          <li>Disconnected</li>
          <li>In Progress</li>
          <li>Cancelled</li>
          <li>Not Started</li>
          <li>Completed</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <input
            type="checkbox"
            class="form-check-input mr-2"
            id="exampleCheck1"
          />
          &nbsp; &nbsp;
          <label className="">Sync tasks to account</label>
          <div className="col-12">
            <select className="form-select"> </select>
            <label className="">(In case mandatory fields not found)</label>
          </div>
        </div>
      </div>
      &nbsp;
      <h4>Appointments</h4>
      &nbsp;
      <div className="row">
        <div className="col-6">
          <input
            type="checkbox"
            class="form-check-input mr-2"
            id="exampleCheck1"
          />
          &nbsp; &nbsp;
          <label className="">Sync appointments to account</label>
          <div className="col-12">
            <select className="form-select"> </select>
            <label className="">(In case mandatory fields not found)</label>
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
    </div>
  );
}

export default OutLooks;
