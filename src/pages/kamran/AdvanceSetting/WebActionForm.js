import React from 'react'
import { Link } from 'react-router-dom'
function WebActionForm() {
  return (
    <div className='card'>
      <div className='table-responsive active-projects style-1'>
        <h3 className='tbl-caption text-light'>New Web Action</h3>
      </div>
      <form>
        <div className='row'>
<div className='col-6'>
    <select className='form-control' aria-label='select'>
        <option value="">Module Name</option>
        <option>Land</option>
        <option>Account</option>
        <option>Agent</option>
    </select>
</div>
<div className='col-6'>
    <input type='text' className='form-control' aria-label='name'placeholder='Label Name'/>
</div>
<div className='col-6 mt-3'>
    <input type='text' className='form-control' aria-label='name'placeholder='No of hits allowed'/>
</div>
<div className='col-6 mt-3'>
    <input type='text' className='form-control' aria-label='name'placeholder='Variable Name'/>
</div>
<div className='col-6 mt-3'>
    <select className='form-control' aria-label='select'>
        <option value="">Action Type</option>
        <option>Workflow</option>
        <option>Account</option>
        <option>Agent</option>
    </select>
</div>
<div className='col-6 mt-3'>
    <select className='form-control' aria-label='select'>
        <option value="">Workflow</option>
        <option>Land</option>
        <option>Account</option>
        <option>Agent</option>
    </select>
</div>
<div className='col-6 mt-3'>
    <select className='form-control' aria-label='select'>
        <option value="">Group Name</option>
        <option>Land</option>
        <option>Account</option>
        <option>Agent</option>
    </select>
</div>
<div className=' col-6 mt-3'>
    <input type='textaera' className='form-control' aria-label='description' placeholder='Discription Message Of Success'/>
</div>
<div className=' mt-3'>
    <input type='textaera' className='form-control' aria-label='description' placeholder='Discription'/>
</div>
<div className='mt-3'>
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

export default WebActionForm
