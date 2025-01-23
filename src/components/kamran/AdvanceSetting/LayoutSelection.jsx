import React from 'react'
import { Link } from 'react-router-dom'
function LayoutSelection() {
  return (
    <div className='card'>
       <div className='table-responsive active-projects style-1'>
            <h3 className='tbl-caption text-light'>LayOut</h3>
        </div>
        <form>
        <div className='row mx-auto'>
        <div className='col-6'>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Module"
                            aria-label="Name"
                        />
                    </div>
                    <div className='col-6'>
                  <select className='form-control' aria-label='name'>
                   <option value="">Page Layout</option>
                   <option>Normal Layout</option>
                   <option>Standard Layout</option>
                   <option> Low Layout</option>
                  </select>
                  </div>
                  <div className='col-6 mt-2'>
                  <select className='form-control' aria-label='name'>
                   <option value="">List Layout</option>
                   <option>All List Layout</option>
                   <option>Pending Apporaval</option>
                   <option> All Active Campaigns</option>
                  </select>
                  </div>
                  <div className=' col-6 mt-2'>
                        <input
                            type="text"
                            id="number"
                            name="number"
                            className="form-control"
                            placeholder="Column Count"
                            aria-label="number"
                        />
                    </div>
                    <div className='col-6 mt-2'>
                  <select className='form-control' aria-label='name'>
                   <option value="">Business Card </option>
                   <option>  </option>
                   <option>Pending Apporaval</option>
                   <option> Default Business Card</option>
                  </select>
                  </div>
                  <div className=' col-6 mt-2'>
                        <input
                            type="text"
                            id="name" disabled
                            name="name"
                            className="form-control"
                            placeholder="Item Selection Count"
                            aria-label="name"
                        />
                    </div>
                    <div className='col-6 mt-2'>
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="fw-normal" for="exampleCheck1">Quick Create
          </label>  
                    </div>
                    <div className='col-6 mt-2'>
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="fw-normal" for="exampleCheck1">Block saving if location is disabled
          </label>  
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

export default LayoutSelection
