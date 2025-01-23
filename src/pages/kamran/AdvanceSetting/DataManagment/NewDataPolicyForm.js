import React from 'react'
import { Link } from 'react-router-dom'

function NewDataPolicyForm() {
  return (
    <div className='card'>
    <div className='table-responsive active-projects style-1'>
        <h4 className='tbl-caption text-light'>General</h4>
    </div>
    <from >
        <div className='row'>
            <div className='col-6'>
                <input type='text' className='form-control' aria-label='text' placeholder='Name'/>
            </div>
            <div className='col-6'>
                <input type='text' className='form-control' aria-label='text' placeholder='Discription'/>
            </div>
            <h6 className='border-bottom p-2    '>Global Masking</h6>
            <div className='d-flex align-items-center gap-2 mt-4 text-center '>
                <div className=' gap-1'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Mask Phone Control Type With</label>
           </div>
           <div className=''>
            <select className='form-control' aria-label='select' disabled>
                <option className='fw-normal' value="">option</option>
                <option className='fw-normal' value="">1</option>
                <option className='fw-normal' value="">1</option>
            </select>
           </div>
           Skip First
           <div className=' gap-1'>
<input type='text' className='form-control' aria-label='name' placeholder=''  />
            </div>
            And Last 
            <div className=' gap-1'>
<input type='text' className='form-control' aria-label='name' placeholder=''  />
            </div>
            Characters
            </div>
            <div className='d-flex align-items-center gap-2 mt-4 text-center '>
                <div className=' gap-1'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Mask Phone Control Type With</label>
           </div>
           <div className=''>
            <select className='form-control' aria-label='select' disabled>
                <option className='fw-normal' value="">option</option>
                <option className='fw-normal' value="">1</option>
                <option className='fw-normal' value="">1</option>
            </select>
           </div>
           Skip First
           <div className=' gap-1'>
<input type='text' className='form-control' aria-label='name' placeholder=''  />
            </div>
            And Last 
            <div className=' gap-1'>
<input type='text' className='form-control' aria-label='name' placeholder=''  />
            </div>
            Characters
            </div>
            <div className='d-flex align-items-center gap-2 mt-4 text-center '>
                <div className=' gap-1'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Mask Phone Control Type With</label>
           </div>
           <div className=''>
            <select className='form-control' aria-label='select' disabled>
                <option className='fw-normal' value="">option</option>
                <option className='fw-normal' value="">1</option>
                <option className='fw-normal' value="">1</option>
            </select>
           </div>
           Skip First
           <div className=' gap-1'>
<input type='text' className='form-control' aria-label='name' placeholder=''  />
            </div>
            And Last 
            <div className=' gap-1'>
<input type='text' className='form-control' aria-label='name' placeholder=''  />
            </div>
            Characters
            </div>
             <div className='d-flex align-items-center gap-2 mt-4 text-center '>
                <div className=' gap-1'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Mask Phone Control Type With</label>
           </div>
           <div className=''>
            <select className='form-control' aria-label='select' disabled>
                <option className='fw-normal' value="">option</option>
                <option className='fw-normal' value="">1</option>
                <option className='fw-normal' value="">1</option>
            </select>
           </div>
           Skip First
           <div className=' gap-1'>
<input type='text' className='form-control' aria-label='name' placeholder=''  />
            </div>
            And Last 
            <div className=' gap-1'>
<input type='text' className='form-control' aria-label='name' placeholder=''  />
            </div>
            Characters
            </div>
            <h6 className='border-bottom p-2'>Field Level Masking</h6>
            <div className='col-6 mt-2'>
                <select className='form-control' aria-label='select'>
                    <option className='fw-normal'value="application">Application</option>
                    <option className='fw-normal'value="application">Marketing</option>
                    <option className='fw-normal'value="application">Sales</option>
                </select>
            </div>
        </div>
        <div className='mt-2'>
          <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
          <button
            className="btn btn-primary me-1"
            type="submit">
            Save
          </button>
        </div>
        </from>
    </div>
  )
}

export default NewDataPolicyForm
