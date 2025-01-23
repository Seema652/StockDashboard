import React from 'react'
import { Link } from 'react-router-dom'

function Assignment() {
  return (
    <div className='card'>
        <div className='table-responsive active-projects style-1'>
<h4 className='tbl-caption text-light'>Assignment</h4>
        </div>
        <form>
            <div className='row'>
                <div className='col-6'>
<select className='form-control' aria-label='select'>
<option className='fw-normal' value="survey">Survey</option>
<option className='fw-normal' value=""></option>
<option className='fw-normal' value="1"></option>
</select>
                   </div>
                   <div className='col-6'>
<select className='form-control' aria-label='select'>
<option className='fw-normal' value="meant for">Meant For</option>
<option className='fw-normal' value="agent">Agent</option>
<option className='fw-normal' value="activity">Activity</option>
</select>
</div>
<div className='col-6 mt-2'>
<select className='form-control' aria-label='select'>
<option className='fw-normal' value="survey">Assigned To</option>
<option className='fw-normal' value="contact">Contact</option>
<option className='fw-normal' value="user">User</option>
</select>
                   </div>
                   <div className='col-6 mt-2'>
                    <input type='date' className='form-control' aria-label='name' placeholder='Date'/>
                   </div>
                   <div className='col-6 mt-2'>
                    <input type='date' className='form-control' aria-label='name' placeholder='Date'/>
                   </div>
                   <div className='col-6 mt-2 d-flex align-items-center gap-2'>
                    <input type='checkbox' className='form-input-check' aria-label='check'/>
                    <label className='fw-normal'>Show Skip Action</label>
                   </div>
                   <h6 className='border-bottom p-2'>Access Type</h6>
                   <div className='col-2 mt-2 d-flex align-items-center gap-2'>
                    <input type='checkbox' className='form-input-check' aria-label='check'/>
                    <label className='fw-normal'>Email</label>
                   </div>
                   <div className='col-2 mt-2 d-flex align-items-center gap-2'>
                    <input type='checkbox' className='form-input-check' aria-label='check'/>
                    <label className='fw-normal'>Portal</label>
                   </div>
                   <div className='col-2 mt-2 d-flex align-items-center gap-2'>
                    <input type='checkbox' className='form-input-check' aria-label='check'/>
                    <label className='fw-normal'>Mobile App</label>
                   </div>
                   <div className='col-2 mt-2 d-flex align-items-center gap-2'>
                    <input type='checkbox' className='form-input-check' aria-label='check'/>
                    <label className='fw-normal'>Application</label>
                   </div>
                   <div className='mt-2'>
          <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
          <button
            className="btn btn-primary me-1"
            type="submit">
            Next
          </button>
        </div>
            </div>
        </form>
      </div>
  )
}

export default Assignment
