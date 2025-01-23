import React from "react" ;
import CustomInputField from "../../common/CustomInputField";
import { Link } from "react-router-dom";

function ExternalModule () {

    return (
    <div className="card">
    <div className="table-responsive active-projects style-1">
        <h2 className="tbl-caption text-light">
        New External Modules</h2>
    </div>


    <h3>External Module Information</h3>

    <div className="">
    <div className="col-10">
        <label>Name</label>
        <CustomInputField/>
    </div>
    <div className="col-10">
        <label>Position</label>
        <select className="form-control">
            <option></option>
            <option>Edit View</option>
            <option>Detailed View</option>
            <option>Related View</option>
            <option>List View</option>
            <option>Home Page View</option>
        </select>
    </div>
    <div className="col-10">
        <label>Type</label>
        <select className="form-control">
            <option></option>
            <option>Action List</option>
            <option>Button</option>
            <option>Link</option>
            <option>Module Saving</option>
            <option>On Approval</option>
            <option>Work Flow</option>
            <option>Related Module View</option>
            <option>On Create</option>
            <option>On Update</option>
            <option>On Delete</option>
            <option>On Load</option>
        </select>
    </div>
    <div className="col-10">
        <label>Source</label>
        <select className="form-control">
            <option></option>
            <option>URL</option>
            <option>Javascript</option>
            <option>Java Service</option>
            <option>Module Saving</option>
            <option>Web Service</option>
            <option>Procedure</option>
            <option>Standard Action</option>
            <option>External Report</option>
            <option>Page Layout</option>
            <option>Mobile Activity</option>
        </select>
    </div>
    <div className="col-10">
        <label>Display Type	</label>
        <select className="form-control">
            <option></option>
            <option>Display Type	</option>
            <option>Dialog 	</option>
            <option>New Window</option>
            <option>Overlay</option>
            <option>Background Task</option>
        </select>
    </div>
    <div className="col-10">
        <label>Description</label>
        <CustomInputField/>
    </div>
    <h2 className="tbl-caption text-light">
    Source Information	</h2>
    <h3>Source Information	</h3>

    <div className='row'>
                    <div className='col-6 mt-2'>
                    <label>Select Field Type</label>
                        <select className='form-control'>
                            <option></option>
                            <option>Account</option>
                            <option>User </option>
                            <option>Company Info</option>
                            <option>System Info</option>
                        </select>
                    </div>
                    <div className='col-6 mt-2'>
                    <label>Insert Field</label>
                        <select className='form-control'>
                            <option></option>
                            <option> </option>
                            <option></option>
                        </select>
                    </div>

                    <div className="col-12">
        <label>URL	</label>
        <CustomInputField/>
    </div>

    <div className='col-6 mt-2'>
                    <label>Link Encoding	</label>
                        <select className='form-control'>
                            <option>Unicode(UTF-8)</option>
                            <option>ISO-8859-1 </option>
                            <option>Unicode(UTF-16)</option>
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
    );
}
 
export default ExternalModule ;