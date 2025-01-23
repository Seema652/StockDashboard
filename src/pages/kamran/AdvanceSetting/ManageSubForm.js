import React from 'react'
import { Link } from 'react-router-dom'

function ManageSubForm() {
  return (
    <div className='card'>
      <div className='table-responsive active-projects style-1'>
        <h4 className='tbl-caption text-light'>
New Sub-Types
        </h4></div>
        <form>
            <div className='row'>
                <div className='col-6'>
                    <input type='text' className='form-control' aria-label='name' 
                    placeholder='Name'/>
                </div>
                <div className='col-6'>
                    <input type='text' className='form-control' aria-label='name' 
                    placeholder='Code'/>
                </div>
                <div className='col-6 mt-2'>
                    <input type='text' className='form-control' aria-label='name' 
                    placeholder='Singular Name'/>
                </div>
                <div className='col-6 mt-2'>
<select className='form-control' aria-label='select'>
    <option className='fw-normal' value="module">Module</option>
    <option>Account</option>
    <option>Agent</option>
</select></div>
                <div className='mt-2'>
                <label for="exampleFormControlTextarea1"className='fw-normal'>Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <div className='mt-2'>
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

export default ManageSubForm
