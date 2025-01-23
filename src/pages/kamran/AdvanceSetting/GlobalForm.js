import React from 'react'
import { Link } from 'react-router-dom'
function GlobalForm() {
  return (
    <div className='card'>
      <div className='table-responsive active-projects style-1'>
        <h2 className='tbl-caption tbl-caption-2'>Global Cascading</h2>
      </div>
      <form className='row'>
        <div className="col-xl-6 mb-3">
          <select
            className="form-select"
            aria-label="Select execution target"
            name="work">
            <option value="" disabled selected>Parent Module</option>
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
            <option value="" disabled selected>Child Module</option>
            <option>Delete</option>
            <option>Periodic</option>
            <option>update</option>
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

      </form>
    </div>
  )
}

export default GlobalForm
