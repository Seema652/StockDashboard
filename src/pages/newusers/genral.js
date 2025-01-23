import React from "react";
import CustomInputField from "../../common/CustomInputField";
import { Link } from "react-router-dom";

// This is the first Main component
export function Genral() {
  return (
    <div className="card">
      <div className="table-responsive active-projects style-1">
        <h2 className="tbl-caption text-light">Gernal</h2>
        {/* <button type="button" className="btn btn-secondary btn-sm"> + Invite Employee
                </button> */}
      </div>

      <div>
        <div className="row">
          <div className="col-6">
            <label>First Name</label>
            <CustomInputField />
          </div>
          <div className="col-6">
            <label>Last Name</label>
            <CustomInputField />
          </div>
          <div className="col-6">
              <label className="">Desgination</label>
              <div className="">
                <select className="form-select"></select>
              </div>
          </div>
          <div className="col-6">
          <label className="">Department</label>
          <div className="">
            <select className="form-select"></select>
          </div>
          </div>
          <div className="col-6">
            <label>Phone no</label>
            <CustomInputField />
          </div>
          <div className="col-6">
            <label>Ext</label>
            <CustomInputField />
          </div>
          <div className="col-6">
            <label>Mobile</label>
            <CustomInputField />
          </div>
        <div className="col-6">
            <label>Outgoing number(IVR)</label>
            <CustomInputField />
          </div>
          <div className="col-6">
            <label>IMEI Number</label>
            <CustomInputField />
          </div>
          </div>
      </div>
      <div>
        <h2> Address info</h2>
        <div> 
        <div className="row">
          <div className="col-6">
            <label>Location</label>
            <CustomInputField />
          </div>
          <div className="col-6">
            <label>Address</label>
            <CustomInputField />
          </div>
          <div className="col-6">
            <label>Calendar Shift</label>
            <CustomInputField />
          </div>
          <div className="col-6">
            <label>User Type</label>
            <CustomInputField />
          </div>
          <div className="col-6">
            <label>City</label>
            <CustomInputField />
          </div>
          <div className="col-6">
            <label>State</label>
            <CustomInputField />
          </div>
          <div className="col-6">
            <label>Time Zone</label>
            <CustomInputField />
          </div>
          <div className="col-6">
            <label>Country</label>
            <CustomInputField />
          </div>
          <div className="col-6">
            <label>Zip</label>
            <CustomInputField />
          </div>
          <div className="col-6">
          <label className="">Language</label>
          <div className="">
            <select className="form-select">
            <option>English</option>
            </select>
          </div>

          <div className="d-flex justify-content-center mt-3">
          <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
                                            <button
                                                className="btn btn-primary me-1"
                                                type="submit">
                                                Save
                                            </button>                           
          </div>
          </div>
          </div>
          </div>
          </div>
          
         
                                        
    </div>
    
  );
}
