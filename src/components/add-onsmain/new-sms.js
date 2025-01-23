import React from "react";
import CustomInputField from "../../common/CustomInputField";
import { Link } from "react-router-dom";

function NewSMS () {
    return (
        <div className="card">
            <div className="table-responsive active-projects style-1">
            <h2 className="tbl-caption text-light">
            New SMS Settings</h2>

            <div className="row d-flex ">
                <div className="col-6">


                <label> Type</label>
                <select className="form-select">
                <option>Web URL</option>
                <option>Java Service</option>
                <option>Web Service</option>
                </select>
                </div>

            </div>
            </div>

        <div>
            <lable>Service Name	</lable>
            <CustomInputField />
            </div>

            <div className="col-8">
            <lable>Method</lable>  

            <CustomInputField />
            </div>

        &nbsp;

            <div className="col-12 text-center ">
            <lable>Parameter Value</lable>
            <CustomInputField />
            <CustomInputField />
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

        

    );
}

export default NewSMS;