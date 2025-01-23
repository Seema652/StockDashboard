import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function LayouttTabs() {
  return (
    <div className='card'>
      <div className='row'>
        <div className='col-6'>
<input type='text' className='col-6 form-control' placeholder='Layout Name'/>
</div>
<div className='col-6'>
 <input type='text' className='col-6 form-control' placeholder='Discription'/>
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
    </div>
  )
}

export default LayouttTabs
