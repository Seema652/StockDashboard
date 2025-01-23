import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomInputField from "../../../common/CustomInputField";

function NewTeam () {

    return (
        <div className='card'>
        <div className='table-responsive active-projects style-1'>
            <h2 className='tbl-caption text-light'>	New Team</h2>
     {/* <button type="button" className="btn btn-secondary btn-sm" > + Invite Employee
                                    </button> */}
</div>
&nbsp;
 <h5>Details</h5>
 &nbsp;

<div>
        <div className="row">
          <div className="col-12">
            <label>Name</label>
            <CustomInputField />
          </div>
          <div className="col-8">
            <label>Code</label>
            <CustomInputField />
          </div>
          
          &nbsp;

          <div className="col-6">
              <label className="">Headed By	</label>
              <div className="">
                <select className="form-select"><option>
                Dharani</option></select>
              </div>
          </div>
          <div className="col-6">
              <label className="">Access type</label>
              <div className="">
                <select className="form-select">
                    <option>Public</option>
                    <option>Private</option>
                    </select>
              </div>
          </div>
 
 &nbsp;
          <div className="col-0">
            <label>Description</label>
            <CustomInputField />
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

    );
}

export default NewTeam;