import React from 'react'
import { Link } from 'react-router-dom'

function SchedulingForm() {
    return (
        <div className='card'>
            <div className='table-responsive active-projects style-1'>
                <h4 className='tbl-caption text-light'>New Scheduling</h4>
            </div>
            <h6 className='border-bottom p-2'>Schedule Defination</h6>
            <form>
                <div className='row mx-auto'>
                    <div className='col-6'>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            aria-label="Name"
                        />
                    </div>
                    <div className='col-6'>
                        <input
                            type="textarea"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Description"
                            aria-label="Name"
                        />
                    </div>
                    <div className='col-6 mt-2'>

                        <input
                            type="date"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Date"
                            aria-label="Date" />
                    </div>
                    <div className='col-6 mt-2'>

                        <input
                            type="date"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Date"
                            aria-label="Date" />
                    </div>
                    <h6 className='border-bottom p-2'>Modules</h6>
                    <div className='col-6 mt-2'>
                        <select className='form-control' name='select' aria-label='Enter'>
                            <option value="" disabled selected>Select Module</option>
                            <option>Account</option>
                            <option>Activities</option>
                            <option>Agent</option>
                        </select>
                    </div>
                    <div className='col-6 mt-2'>
                        <select className='form-control' name='select' aria-label='Enter'>
                            <option value="" disabled selected>Book Select Against</option>
                            <option>Account</option>
                            <option>Activities</option>
                            <option>Agent</option>
                        </select>
                    </div>
                    <h6 className='border-bottom p-2'>Display</h6>
                    <div className='d-flex align-items-center gap-1'>
                        <div className='d-flex align-items-center gap-1'>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Is Show Timings as Start Time and End Time</label>
                        </div>
                        <div className='d-flex align-items-center gap-1'>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Disable scheduling for previous date</label>
                        </div>
                        <div className='d-flex align-items-center gap-1'>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Disable drag drop</label>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                    <div className=''>
                        <h6 className='p-2'>View Type :</h6>
                    </div>
                    <div className='d-flex align-items-center gap-1'>
                        <input type='radio' className='form-check-input'name='day'/>
                        <label className="fw-normal">Day View</label>
                    </div>
                    <div className='d-flex align-items-center gap-1'>
                        <input type='radio' className='form-check-input'name='day'/>
                        <label className="fw-normal">Week View</label>
                    </div>
                    <div className='d-flex align-items-center gap-1'>
                        <input type='radio' className='form-check-input'name='day'/>
                        <label className="fw-normal">Both View</label>
                    </div>
                    </div>
                </div>
                <div>
          <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
          <button
            className="btn btn-primary me-1"
            type="submit">
            Save
          </button>
        </div>
        
            </form>  
        </div>
    )
}

export default SchedulingForm
