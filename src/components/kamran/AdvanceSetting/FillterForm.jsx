import React from 'react'
import { Link } from 'react-router-dom'

function FillterForm() {
  return (
    <div className='card'>
      <div className='table-responsive active-projects style-1'>
        <h4 className='tbl-caption text-light'>Fillter</h4>
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
                   <div className='mt-2'>
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
  )
}

export default FillterForm
