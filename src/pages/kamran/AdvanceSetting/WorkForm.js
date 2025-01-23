import React from 'react';
import { Link } from 'react-router-dom';

function WorkForm() {
    return (
        <div className='card'>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        New Work Flow
                                    </h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        
                                    <div className="col-xl-6 mb-3">
                                            <input 
                                                type="text"
                                                id="workflow_name"
                                                name="workflow_name"
                                                className="form-control"
                                                placeholder="Work Flow Name"
                                                aria-label="Workflow Name" 
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <select 
                                                className="form-select" 
                                                aria-label="Select execution target" 
                                                name="work">
                                                <option value="" disabled selected>Execute On</option>
                                                <option>Account</option>
                                                <option>Activities</option>
                                                <option>Agent</option>
                                            </select>
                                        </div>
                                         <div className="col-xl-6 mb-3">
                                            <select 
                                                className="form-select" 
                                                aria-label="Select execution target" 
                                                name="work">
                                                <option value="" disabled selected>Evaluate On</option>
                                                <option>Delete</option>
                                                <option>Periodic</option>
                                                <option>update</option>
                                            </select>
                                        </div>
                                       
                                        <div className="col-xl-6 mb-3">
                                            <input 
                                                type="text"
                                                id="periodic"
                                                name="periodic"
                                                className="form-control"
                                                placeholder="Periodic"
                                                aria-label="periodic"
                                            />
                                        </div>
                                       <div className="col-xl-6 mb-3">
                       
                                              <input className="form-check-input" type="checkbox" id="exampleCheck1" />
                                               <label className="form-check-label" htmlFor="exampleCheck1">
                                                   Active
                                               </label>
                                           
                                        </div>
                                        <div className="col-xl-6 mb-3">
                       
                                              <input className="form-check-input" type="checkbox" id="exampleCheck1" />
                                               <label className="form-check-label" htmlFor="exampleCheck1">
                                                   Restrict execution of this WorkFlow from other workflow
                                               </label>
                                           
                                        </div>
                                        
                                      
                                    <div>
                                        <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
                                        <button 
                                            className="btn btn-primary me-1" 
                                            type="submit">
                                            Save
                                        </button>
                                    </div>
                                    <div className='col-xl-6 mb-3'>
                                    <label for="exampleSelect" class="form-label">Select an Option</label>
    <select class="form-select" id="exampleSelect" aria-label="Select example">
        <option selected>Open this select menu</option>
        <option value="">Updates Module</option>
        <option value="">Follow Up</option>
        <option value="">Sharing</option>
    </select>
                                    </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkForm;
