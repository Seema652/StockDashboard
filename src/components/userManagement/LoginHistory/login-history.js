import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomInputField from "../../../common/CustomInputField";
import { Link } from "react-router-dom";

function LoginHistory() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="card">
        <div className="table-responsive active-projects style-1">
          <h2 className="tbl-caption text-light">Secutiry</h2>
          {/* <button type="button" className="btn btn-secondary btn-sm"> + Invite Employee
                  </button> */}
        </div>
  
        <div>
        <div className="row">
        <div className="col-6">
                <label className="">Users</label>
                <div className="">
                  <select className="form-select">
                  <option>Dharani</option>
                  </select>
                </div>
            </div>
            <div className="col-6">
                <label className="">Status</label>
                <div className="">
                  <select className="form-select">
                  <option>Success</option>
                  <option>Failure</option>
                  </select>
                </div>
            </div>
            <div className="col-6">
                <label className="">Login Type	</label>
                <div className="">
                  <select className="form-select">
                  <option>Application</option>
                  <option>Mobile</option>
                  </select>
                </div>
            </div>
           
            <div className="col-6">
                <label className="">Browser Type</label>
                <div className="">
                  <select className="form-select">
                      <option>IE</option>
                      <option>Chrome</option>
                      <option>FF</option>
                      <option>Opera</option>
                      <option>Safari</option>
                      <option>Android Browser</option>
                  </select>
                </div>
            </div>
            </div>
           
            &nbsp;
            <div className="row">
            <div  className="col-6">
                     <label htmlFor="startDate">Start Date</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="form-control"
                        id="startDate"
                    />
                </div>

 
             {/* End Date Picker */}
             <div className="col-6">
                    <label htmlFor="endDate">End Date</label>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="form-control"
                        id="endDate"
                    />
                </div>

                </div>
           
        
            
                 
                  
                  <div className="col-1">
                <label className="">Export to</label>
                <div className="">
                  <select className="form-select">
                  <option>Excel</option>
                  <option>CSV</option>
                  </select>
                </div>
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
            
    );
}

export default LoginHistory;
