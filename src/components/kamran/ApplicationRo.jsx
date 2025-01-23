import React from 'react'
import { Link } from 'react-router-dom'
function ApplicationRo() {
  return (
    <div className='card'x>
       <div className='table-responsive active-projects style-1'>
      <h4 className='tbl-caption text-light'>Application Ro </h4>
    </div>
    <form>
        <div className='row'>
            <div className='d-flex agiln-items-center gap-1'>
            <div className='col-6'>
            <input type="radio" class="form-check-input"  name ="day"id="exampleCheck1" />
            <label class="fw-normal" for="exampleCheck1">
                Allow All Roles To Use This Appilcation 
            </label>
            </div>
            <div className='col-6'>
            <input type="radio" class="form-check-input"  name ="day"id="exampleCheck1" />
            <label class="fw-normal" for="exampleCheck1">
                Allow Only Selected Roles To Use This Appilcation 
            </label>
            </div>
        </div>
        <div className=' gap-3 mt-4 d-flex justify-content-center'>
        <div className='col-5 border'>
                        
                        <h3>Available</h3>
                        <div style={{ textDecoration: "none" }}>
                            <ul>
                                <li><a href='account'>Account</a></li>
                                <li><a href='campaigns'>Campaigns</a></li>
                                <li><a href='contact'>Contact</a></li>
                                <li><a href='type-of-business'>Type Of Business</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-5 border'>
                        <h3>Select Tabs</h3>
                        <div style={{overflow: "hidden" }}>
                            <ul>
                                <li><a href='property'>Property</a></li>
                                <li><a href='tenant'>Tenant</a></li>
                                <li><a href='agent'>Agent</a></li>
                                <li><a href='block'>Blocks</a></li>
                                <li><a href='chargers'>Chargers</a></li>
                                <li><a href='rems'>REMS</a></li>
                                <li><a href='floor'>Floor</a></li>
                                <li><a href='brokers'>Brokers</a></li>
                            </ul>          
                        </div>
                    </div>
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

export default ApplicationRo
