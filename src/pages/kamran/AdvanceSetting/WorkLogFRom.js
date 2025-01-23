import React from 'react'
import { Link } from 'react-router-dom'
function WorkLogFRom() {
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
                                    <select 
                                        className="form-select" 
                                        aria-label="Select execution target" 
                                        name="module">
                                        <option value="" disabled selected>Module</option>
                                        <option>Account</option>
                                        <option>Activities</option>
                                        <option>Agent</option>
                                    </select>
                                </div>
                                 <div className="col-xl-6 mb-3">
                                    <select 
                                        className="form-select" 
                                        aria-label="Select execution target" 
                                        name="action ">
                                        <option value="" disabled selected>Action Types</option>
                                        <option>Follow</option>
                                        <option>SMS</option>
                                        <option>Email</option>
                                    </select>
                                </div>
                                <div className="col-xl-6 mb-3">
                                            <input 
                                                type="date"
                                                id="date"
                                                name="date"
                                                className="form-control"
                                                placeholder="Periodic"
                                                aria-label="date"
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <input 
                                                type="date"
                                                id="date"
                                                name="date"
                                                className="form-control"
                                                placeholder="Periodic"
                                                aria-label="date"
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                    <select 
                                        className="form-select" 
                                        aria-label="Select execution target" 
                                        name="module">
                                        <option value="" disabled selected>Status</option>
                                        <option>Pending</option>
                                        <option>Suceess</option>
                                        <option>Failed</option>
                                    </select>
                                </div>
                               
                              
                            <div>
                                <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
                                <button 
                                    className="btn btn-primary me-1" 
                                    type="submit">
                                    Save
                                </button>
                            </div>
                          
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default WorkLogFRom
