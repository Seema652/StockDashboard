import React from 'react'
import { Link } from 'react-router-dom'
function ChooseCuster() {
  return (
    <div className='card'>
       <div className='table-responsive active-projects style-1'>
      <h4 className='tbl-caption text-light'>Choose Custor </h4>
    </div>
   <form>
    <div className='row gap-3 mt-4 d-flex justify-content-center'>
                   </div>
                   <div className='row mt-2'>
                   <div className='col-6'>
                        <select className='form-control' aria-label='select'>
                            <option value="">Default Landing tab</option>
                            <option>1</option>
                            <otpion>2</otpion>
                        </select>
                    </div>
    <div className='col-6'>
                        <select className='form-control' aria-label='select'>
                            <option value="">Default Dashboard </option>
                            <option>Marketing 1</option>
                            <otpion>Marketing</otpion>
                        </select>
                    </div>
                    <div className='col-6 mt-2'>
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="fw-normal" for="exampleCheck1">Hide left panel on module/ application home page</label>
        </div>
        <div className='col-6 mt-2'>
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="fw-normal" for="exampleCheck1">Overwrite users personal custom application	 
        </label>
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

export default ChooseCuster
