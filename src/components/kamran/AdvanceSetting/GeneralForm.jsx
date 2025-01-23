import React from 'react'
import { Link } from 'react-router-dom'
function GeneralForm() {
  return (
    <div className='card'>
        <div className='table-responsive active-projects style-1'>
            <h3 className='tbl-caption text-light'>General</h3>
        </div>
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
                  <select className='form-control' aria-label='name'>
                   <option value="">Select</option>
                   <option>All</option>
                   <option>Executive</option>
                   <option>Service Manager</option>
                  </select>
                  </div>
                  <div className='mt-2'>
                        <input
                            type="textarea"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Description"
                            aria-label="Name"
                        />
                    </div>
       
        </div>
        <div className='mt-2'>
          <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
          <button
            className="btn btn-primary me-1"
            type="submit">
            Next
          </button>
        </div>
       
        </form>
      
    </div>
  )
}

export default GeneralForm
