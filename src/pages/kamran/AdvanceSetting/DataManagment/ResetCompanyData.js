import React from 'react'
import { Link } from 'react-router-dom'
import { FaFilePdf } from "react-icons/fa6";
import { BiSolidFileJson } from "react-icons/bi";
import { FaFileExcel } from "react-icons/fa";

function ResetCompanyData() {
  return (
    <div className="card" style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
    <div className="table-responsive active-projects style-1">
      <div className='tbl-caption text-light' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <h3 className="" style={{ color: 'white' }}> Reset Company Data</h3>
       <div>
        
          <Link className="btn btn-primary btn-sm" to="/import/pdf" role="button" aria-controls="offcanvasExample" aria-label="Import PDF" style={{ marginLeft: '8px' }}>
            <FaFilePdf /> PDF
          </Link>
          <Link className="btn btn-primary btn-sm" to="/import/json" role="button" aria-controls="offcanvasExample" aria-label="Import JSON" style={{ marginLeft: '8px' }}>
            <BiSolidFileJson /> JSON
          </Link>
          <Link className="btn btn-primary btn-sm" to="/import/excel" role="button" aria-controls="offcanvasExample" aria-label="Import Excel" style={{ marginLeft: '8px' }}>
            <FaFileExcel /> Excel
          </Link>
        </div>
      </div>
    </div>
    <from >
        <div className='mt-2 gap-2'>
            <input type='radio' className='form-check-input' aria-label='radio' name='day'/>
            <label className='fw-normal'>Delete sample data (Delete all the data)</label>
        </div>
        <div className='mt-2 gap-2'>
            <input type='radio' className='form-check-input' aria-label='radio' name='day'/>
            <label className='fw-normal'>
            Delete and reset the company settings (Delete the data and reset the company settings including
             all the customizations done till now)
            </label>
        </div>
        <div className='mt-2'>
          <Link to='' className="btn btn-danger light ms-1">Delete</Link>
          <button
            className="btn btn-primary me-1"
            type="submit">
            Cancel
          </button>
        </div>
    </from>
 
    </div>
  )
}

export default ResetCompanyData
