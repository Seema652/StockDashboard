import React from 'react'
import { Link } from 'react-router-dom'
import Stage from '../../../components/kamran/Stage'

function ModuleStageForm() {
  return (
    <div className='card'>
       <div className='table-responsive active-projects style-1'>
                <h2 className='tbl-caption text-light'>New Module Stage</h2>
            </div>
            <from >
        <div className='row'>
        <div className='col-6 mt-2'>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            aria-label="Name"
                        />
                    </div>
                    <div className='col-6 mt-2'>
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
                        <select className='form-control' name='name'aria-label='name'>
                            <option value=""disabled>Module</option>
                            <option>Account</option>
                            <option>Account Type</option>
                            <option>Agent</option>
                        </select>
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
            
     </from>
      
    </div>
    
  )
}

export default ModuleStageForm
