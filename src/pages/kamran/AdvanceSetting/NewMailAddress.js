import React from 'react'
import { Link } from 'react-router-dom'

function NewMailAddress() {
  return (
    <div className='card'>
      <div className='table-responsive active-projects style-1'>
        <h3 className='tbl-caption text-light'>New Mail Address</h3>
      </div>
      <form>
        <div className='row mx-auto'>
            <div className='col-6 '>
                <input type='text' className='form-control' aria-label='name' 
                placeholder='Display Label'></input>
            </div>
            <div className='col-6'>
                <select className='form-control' aria-label='select'>
                    <option value="">App Type</option>
                    <option>Marketing</option>
                    <option>Tele Marketing</option>
                    <option>Service Desk</option>
                </select>
            </div>
            <div className='col-6 mt-4'>
                <input type='text' className='form-control' aria-label='name'
                placeholder='Email Id'></input>
            </div>
            <div className='col-6 mt-4'>
                <input type='text' className='form-control' aria-label='name'
                placeholder='Password'></input>
            </div>
            <div className='d-flex align-items-center gap-1 col-6'>
                <input type='radio' className='form-check-input'name='day'/>
                <label className="fw-normal" htmlFor="daily">
                Allow All Roles To Use This Application
                </label>
            </div>
            <div className='d-flex align-items-center gap-1 col-6'>
                <input type='radio' className='form-check-input'name='day'/>
                <label className="fw-normal" htmlFor="daily">
                Allow Only Selected Roles To Use This Application
                </label>
            </div>
            <div className='mt-4'>
          <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
          <button
            className="btn btn-primary me-1"
            type="submit">
            Save
          </button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default NewMailAddress
