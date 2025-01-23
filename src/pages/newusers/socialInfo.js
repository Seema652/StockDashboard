import React from "react";
import CustomInputField from "../../common/CustomInputField";
import { Link } from "react-router-dom";

function SocialInfo () {
    return (
        <div className="card">
        <div className="table-responsive active-projects style-1">
          <h2 className="tbl-caption text-light">Social Info</h2>
      
 &nbsp;
      <div>
      <div className="row">
      <div className="col-6">
              <div className="">
                <select className="form-select">
                <option>Facebook</option>
                <option>Gmail</option>
                <option>Twitter</option>
                <option>LinkedIn</option>
                </select>
              </div>
              
          </div>
          <div className="col-6">
          <CustomInputField/>
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
    )
}

export default SocialInfo;