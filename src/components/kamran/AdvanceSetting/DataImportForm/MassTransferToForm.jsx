import React from 'react'
import { Link } from 'react-router-dom'

function MassTransferToForm() {
  return (
    <div className='card'>
    <div className='table-responsive active-projects style-1'>
      <h4 className='tbl-caption text-light'>Define Fillter</h4>
    </div>
    <form>
      <div className='row'>
      <div className='col-6'>
              <select className='form-control' aria-label='select'>
                  <option className='fw-normal' value="accounttype">Transfer From</option>
                  <option className='fw-normal' value="asset type">Asset </option>
                  <option className='fw-normal' value="Account">Account</option>
              </select>
          </div>
          <div className='col-6'>
              <select className='form-control' aria-label='select'>
                  <option className='fw-normal' value="accounttype">Transfer To</option>
                  <option className='fw-normal' value="asset type">Asset Type</option>
                  <option className='fw-normal' value="Account">Account</option>
              </select>
          </div>
         <div className='col-6 mt-2 d-flex align0items-cenetr gap-1'>
            <input type='checkbox' className='form-input-check' name='check' aria-label='check'/>
            <label className='fw-normal'>In-Active</label>
         </div>
         <div className='col-6 mt-2 d-flex align0items-cenetr gap-1'>
            <input type='checkbox' className='form-input-check' name='check' aria-label='check'/>
            <label className='fw-normal'>Send email to New Owner with list of Records</label>
         </div>
         <div className='col-6 mt-2 d-flex align0items-cenetr gap-1'>
            <input type='checkbox' className='form-input-check' name='check' aria-label='check'/>
            <label className='fw-normal'>Contact, Opportunities</label>
         </div>
         <div className='col-6 mt-2 d-flex align0items-cenetr gap-1'>
            <input type='checkbox' className='form-input-check' name='check' aria-label='check'/>
            <label className='fw-normal'>Active</label>
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
    </form>
  </div>
  )
}

export default MassTransferToForm
