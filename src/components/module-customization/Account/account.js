import React from 'react';
import { BiSolidFileJson } from 'react-icons/bi';
import { FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Account() {
  return (
    <div className='card mt-3 '>
      <div className='table-responsive active-projects style-1'>
        <h3 className='tbl-caption text-light'>Customize Account
        <div className='d-flex justify-content-end'>
          {/* Other Buttons */}
          <Link
                  className="btn btn-primary btn-sm"
                  to="/import/pdf"
                  role="button"
                  aria-label="Import PDF"
                  style={{ marginLeft: "8px" }}
                >
                  <FaFilePdf /> PDF
                </Link>
                <Link
                  className="btn btn-primary btn-sm"
                  to="/import/json"
                  role="button"
                  aria-label="Import JSON"
                  style={{ marginLeft: "8px" }}
                >
                  <BiSolidFileJson /> JSON
                </Link>
                <Link
                  className="btn btn-primary btn-sm"
                  to="/import/excel"
                  role="button"
                  aria-label="Import Excel"
                  style={{ marginLeft: "8px" }}
                >
                  <FaFileExcel /> Excel
                </Link>
        </div>
        </h3>
      </div>
      <div>
        <ul className='row'>
          <li className='col-6'>
            <Link to="/customize-fields" style={{ textDecoration: 'none', color: 'inherit' }}>
              Customize Fields
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/customize-fields-rules" style={{ textDecoration: 'none', color: 'inherit' }}>
              Customize Apply Rules
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/customize-external-modules" style={{ textDecoration: 'none', color: 'inherit' }}>
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
              Customize Settings
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
    </div>
  );
}

export default Account;