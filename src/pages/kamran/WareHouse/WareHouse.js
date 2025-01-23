import React from 'react'
import { BiSolidFileJson } from 'react-icons/bi'
import { FaFileExcel } from 'react-icons/fa'
import { FaFilePdf } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function WareHouse() {
  return (
    <div className='card'>
      <div className='table-responsive active-projects style-1'>
        <div className='tbl-caption text-light'>
            <h3 >Ware House Fields</h3>
       <div>
        
          <Link className="btn btn-primary btn-sm" to="" role="button" aria-controls="offcanvasExample" aria-label="Import PDF" style={{ marginLeft: '8px' }}>
            <FaFilePdf /> PDF
          </Link>
          <Link className="btn btn-primary btn-sm" to="" role="button" aria-controls="offcanvasExample" aria-label="Import JSON" style={{ marginLeft: '8px' }}>
            <BiSolidFileJson /> JSON
          </Link>
          <Link className="btn btn-primary btn-sm" to="" role="button" aria-controls="offcanvasExample" aria-label="Import Excel" style={{ marginLeft: '8px' }}>
            <FaFileExcel /> Excel
          </Link>
        </div>
      </div>
    </div>
 
        <ul className='row'>
          <li className='col-6'>
            <Link to="/costumizefields" style={{ textDecoration: 'none', color: 'inherit' }}>
              Customize Fields
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Customize Apply Roles
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Customize External Modules
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Customize Home Layouts
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Customize Page Layouts
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Customize Business Card Layouts
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Customize Print Layouts
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Customize Related Info Layouts
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Customize Cascading Pick List
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Customize Labels
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Customize Duplicate Criteria Definition
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Customize Mapping Templates
            </Link>
          </li>
     </ul>
     </div>
  )
}
 
export default WareHouse
