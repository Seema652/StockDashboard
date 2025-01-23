import React from 'react'
import PropertingForm from '../../ModuleComponent/Pops/PropertingForm'
import { Link } from 'react-router-dom'

function Target() {
  return (
    <div className='card'>
    <div className='table-responsive active-projects style-1'>
     <h4 className='tbl-caption text-light'>Target</h4>
 </div>
 <form className='row'>
    <div className='col-6'>
        <select className='form-control'>
            <option className='fw-normal'value="">Financial year</option>  
            <option className='fw-normal'value="">2024</option>  
            <option className='fw-normal'value="">2023</option>  
                  </select>
    </div>
    <div className='col-6'>
        <select className='form-control'>
            <option className='fw-normal'value="">Location</option>  
            <option className='fw-normal'value="">2024</option>  
            <option className='fw-normal'value="">2023</option>  
                  </select>
    </div>
    <div className='col-6 mt-2'>
        <select className='form-control'>
            <option className='fw-normal'value="">period</option>  
            <option className='fw-normal'value="">2024</option>  
            <option className='fw-normal'value="">2023</option>  
                  </select>
    </div>
    <div className='mt-2' style={{color:"black"}}>
        <PropertingForm/>
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

export default Target
