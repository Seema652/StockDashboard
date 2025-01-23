import React from "react";
import CustomInputField from "../../common/CustomInputField";
import { Link } from "react-router-dom";

function Restrictions() {
  return (
    <div className="card">
      <div className="table-responsive active-projects style-1">
        <h2 className="tbl-caption text-light">Restrictions</h2>

        <div className="row">
          <div className="col-6">
            <input
              type="checkbox"
              class="form-check-input mr-2"
              id="exampleCheck1"
            />
             &nbsp;
             &nbsp;
            <label className=""> Block User from
            </label>
            
          </div>
          <div className="col-6">
            <input
              type="checkbox"
              class="form-check-input mr-2"
              id="exampleCheck1"
            />
            &nbsp;
            &nbsp;
            <label className=""> Block User to
            </label>
          </div>
         

         
        </div>
        &nbsp;
        <div className="row">
        <div className="col-6">
          <label className="">Start IP Address</label>
          <CustomInputField />
        </div>
        <div className="col-6">
          <label className="">End IP Address</label>
          <CustomInputField />
        </div>
        &nbsp;
        <h6>Date & Time Access</h6>

        &nbsp;

        <div className="row">
          <div className="col-6">
            <input
              type="checkbox"
              class="form-check-input mr-2"
              id="exampleCheck1"
            />
             &nbsp;
             &nbsp;
            <label className=""> Start Date</label>
            </div>
          <div className="col-6">
            <input
              type="checkbox"
              class="form-check-input mr-2"
              id="exampleCheck1"
            />
            &nbsp;
            &nbsp;
            <label className="">  Start Time
            </label>
          </div>
          <div className="col-6">
            <input
              type="checkbox"
              class="form-check-input mr-2"
              id="exampleCheck1"
            />
            &nbsp;
            &nbsp;
            <label className=""> End Date
            </label>
          </div>
          <div className="col-6">
            <input
              type="checkbox"
              class="form-check-input mr-2"
              id="exampleCheck1"
            />
            &nbsp;
            &nbsp;
            <label className="">   End Time
            </label>
          </div>
          &nbsp;
          <h6> Weekday Access
          </h6>
          &nbsp;

          <div className="d-flex gap-2">
          <div className="">
            <input
              type="checkbox"
              class="form-check-input mr-2"
              id="exampleCheck1"
            />
             &nbsp;
             &nbsp;
            <label className=""> Sunday</label>
            </div>
            <div className="">
            <input
              type="checkbox"
              class="form-check-input mr-2"
              id="exampleCheck1"
            />
             &nbsp;
             &nbsp;
            <label className=""> Monday</label>
            </div>
            <div className="">
            <input
              type="checkbox"
              class="form-check-input mr-2"
              id="exampleCheck1"
            />
             &nbsp;
             &nbsp;
            <label className=""> Tuesday</label>
            </div>
            <div className="">
            <input
              type="checkbox"
              class="form-check-input mr-2"
              id="exampleCheck1"
            />
             &nbsp;
             &nbsp;
            <label className=""> Wednesday</label>
            </div>
            <div className="">
            <input
              type="checkbox"
              class="form-check-input mr-2"
              id="exampleCheck1"
            />
             &nbsp;
             &nbsp;
            <label className=""> Thursday</label>
            </div>
            <div className="">
            <input
              type="checkbox"
              class="form-check-input mr-2"
              id="exampleCheck1"
            />
               &nbsp;
             &nbsp;
            <label className=""> Friday</label>
            </div>
            <div className="">
            <input
              type="checkbox"
              class="form-check-input mr-2"
              id="exampleCheck1"
            />
             &nbsp;
             &nbsp;
            <label className=""> Saturday</label>
            
            </div>
            </div>

            &nbsp;

            <div className="d-flex gap-2">
          <label className="">Reminder Before</label>
          <CustomInputField />
        
          <div className="">
                <select className="form-select">
                <option>Minutes</option>
                <option>Hours</option>
                <option>Day</option>
                <option>Weeks</option>
                <option>Months</option>
                </select>
                
              </div>
              &nbsp; <div className="">
            <input
              type="checkbox"
              class="form-check-input mr-2"
              id="exampleCheck1"
            />
             &nbsp;
             &nbsp;
            <label className="">   Auto BCC all outgoing emails to myself
            </label>
            </div>

              
              
            &nbsp;
        </div>
        &nbsp;
        <div className="row">
      <div className="col-6">
              <label className="">Reminder Type
              </label>
              <div className="">
                <select className="form-select">
                <option>Default</option>
                <option>SMS</option>
                </select>
              </div>
          </div>
          <div className="col-6">
              <label className="">Max records per page in List View
              </label>
              <div className="">
                <select className="form-select">
                <option>Auto</option>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
                <option>100</option>
                </select>
              </div>
          </div>
          </div>
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

export default Restrictions;
