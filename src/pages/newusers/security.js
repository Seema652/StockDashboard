import React from "react";
import CustomInputField from "../../common/CustomInputField";
import { Link } from "react-router-dom";


export function Security() {
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
              <label className="">Role</label>
              <div className="">
                <select className="form-select">
                <option>Administrator</option>
                <option>Executive</option>
                <option>Mkt Manager</option>
                <option>Service Manager</option>
                <option>Service Representative</option>
                <option>Tele-Mkt Executive</option>
                </select>
              </div>
          </div>
          <div className="col-6">
              <label className="">Password Policy</label>
              <div className="">
                <select className="form-select">
                <option>Default</option>
                </select>
              </div>
          </div>
          <div className="col-6">
            <label>User Abbreviation</label>
            <CustomInputField />
          </div>
          <div className="col-6">
              <label className="">Reports To</label>
              <div className="">
                <select className="form-select">
                    <option>Administrator</option>
                </select>
              </div>
          </div>
          <div className="col-12">
            <label>User Email</label>
            <CustomInputField />
          </div>
          <div className="col-6">
            <label>Password</label>
            <CustomInputField />
          </div>
          <div className="col-6">
            <label>Confirm Password</label>
            <CustomInputField />
          </div>
          <div className="row">
          <tr>
            <td className='p-1'><input type="checkbox" class="form-check-input" id="exampleCheck1" /></td> 
           <td className='p-1'>Email on Login Failure</td>
                </tr>
                <tr>
            <td className='p-1'><input type="checkbox" class="form-check-input" id="exampleCheck1" /></td> 
           <td className='p-1'>Notify on Assignment
           </td>
                </tr>
                <tr>
            <td className='p-1'><input type="checkbox" class="form-check-input" id="exampleCheck1" /></td> 
           <td className='p-1'>Email on Login Success
           </td>
                </tr>
                <tr>
            <td className='p-1'><input type="checkbox" class="form-check-input" id="exampleCheck1" /></td> 
           <td className='p-1'>Do not Lock Account
           </td>
                </tr>
                <tr>
            <td className='p-1'><input type="checkbox" class="form-check-input" id="exampleCheck1" /></td> 
           <td className='p-1'>In-active
           </td>
                </tr>
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
          
    );
}