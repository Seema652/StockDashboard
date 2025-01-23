import React from 'react'
import { FaGoogleDrive } from "react-icons/fa";
import { Link } from 'react-router-dom';
function ApplicationForm() {
  return (
    <div className='card'>
    <div className='table-responsive active-projects style-1'>
      <h4 className='tbl-caption text-light'>Define Custom </h4>
    </div>
    <h6 className='border-bottom p-2'>
      Custom Application Information
    </h6>
    <form>
      <div className='row'>
        <div className='col-6'>
          <input type='text' className='form-control' aria-label='name' placeholder='Name'/>
        </div>
        <div className='col-6'>
          <input type='textarea' className='form-control' aria-label='name' placeholder='Name'/>
        </div>
        <div className='col-6 d-flex align-items-center gap-2'>
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="fw-normal" for="exampleCheck1">In Active</label>
        </div>
        <h6 className='border-bottom p-2'>Choose Custom Application Logo </h6>
        <div className='d-flex align-items-center gap-1 '>
        <div className=''>
          <FaGoogleDrive size={30} />
          </div>
          <input type='file' className='border border-primary '  />
          (Max:-100 Kb)
         </div>
         <div className='text-center'>
         <p>Note:- For Better Quality size must be of
        <br />  <span className='fw-bold'>(Width=120,height=50px)</span>
          </p>
          </div>
          <h6 className='border-bottom p-2'>Choose Custom Company Logo </h6>
        <div className='d-flex align-items-center gap-1 '>
        <div className=''>
          <FaGoogleDrive size={30} />
          </div>
          <input type='file' className='border border-primary '  />
          (Max:-100 Kb)
         </div>
         <div className='text-center'>
         <p>Note:- For Better Quality size must be of
        <br />  <span className='fw-bold'>(Width=120,height=50px)</span>
          </p>
          </div>
      </div>
      <div>
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

export default ApplicationForm
