import React from 'react'
import { Link } from 'react-router-dom'
function MobilePreview() {
  return (
    <div className='card'>
           <div className='table-responsive active-projects style-1'>
            <h3 className='tbl-caption text-light'>Mobile Preview</h3>
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
  )
}

export default MobilePreview
