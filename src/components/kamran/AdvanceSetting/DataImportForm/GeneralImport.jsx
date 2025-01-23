import React from 'react'
import { Link } from 'react-router-dom'

function GeneralImport() {
  return (
    <div className='card'>
        <div className='table-responsive active-projects style-1'>
            <h4 className='tbl-caption text-light'>General</h4>
        </div>
      <form >
        <div className='row'>
            <div className='col-6'>
                <select className='form-control' aria-label='select'>
                    <option className='fw-normal' value="accounttype">Module Type</option>
                    <option className='fw-normal' value="asset type">Asset Type</option>
                    <option className='fw-normal' value="Account">Account</option>
                </select>
            </div>
            <div className='col-6'>
                <input type='text' className='form-control' aria-label='name' placeholder='Save Mapping As'/></div>
                <div className='col-6 mt-2'>
                <select className='form-control' aria-label='select'>
                    <option className='fw-normal' value="file format">File Format</option>
                    <option className='fw-normal' value="excel">Excel</option>
                    <option className='fw-normal' value="visiting">Visting Card</option>
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
      </form>
    </div>
  )
}

export default GeneralImport
