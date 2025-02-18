import React from 'react';
import Sidebar from './sidebar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit } from 'react-icons/fa'; 
import { BsArrowLeft } from 'react-icons/bs'; 
import { useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container mt-5" style={{ marginLeft: "250px", padding: "20px", width: "50%" }}>
        <div className="card shadow">
          <div className="card-header d-flex align-items-center">
            <FaEdit className="fs-5 me-2" /> 
            <h4>Update</h4>
            <button 
              className="btn btn-primary  ms-auto"  
              onClick={() => navigate("/user")}
            >
              <BsArrowLeft /> Back
            </button>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Role</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="role" id="roleUser" value="User" />
                    <label className="form-check-label" htmlFor="roleUser">User</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="role" id="roleAdmin" value="Admin" />
                    <label className="form-check-label" htmlFor="roleAdmin">Admin</label>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Status</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="status" id="statusActive" value="Active" />
                    <label className="form-check-label" htmlFor="statusActive">Active</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="status" id="statusInactive" value="Inactive" />
                    <label className="form-check-label" htmlFor="statusInactive">Inactive</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="status" id="statusBanned" value="Banned" />
                    <label className="form-check-label" htmlFor="statusBanned">Banned</label>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="groupRole">Group Role</label>
                <select className="form-select" id="groupRole">
                  <option value="None">None</option>
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" defaultValue="admindemo" />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="fullname">Fullname</label>
                <input type="text" className="form-control" id="fullname" />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="plan">Plan</label>
                <select className="form-select" id="plan">
                  <option value="">Select plan</option>
                  <option value="Basic">Basic</option>
                  <option value="Premium">Premium</option>
                  <option value="Pro">Pro</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="expirationDate">Expiration Date</label>
                <input type="text" className="form-control" id="expirationDate" defaultValue="0" />
                <small className="form-text text-muted">Set 0 is unlimited</small>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="timezone">Timezone</label>
                <select className="form-select" id="timezone">
                  <option value="Africa/Abidjan">(UTC +00:00) Africa/Abidjan</option>
                  {/* Add other timezones as options here */}
                </select>
              </div>

              <div className="text-end">
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
