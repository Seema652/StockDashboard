import React from 'react'
import { Link } from 'react-router-dom'

function SaleMarketing() {
  return (
    <div className='card'>
       <div className='table-responsive active-projects style-1'>
        <h4 className='tbl-caption text-light'>Sales And Marketing</h4>
     
    </div>
    <ul className='row'>
          <li className='col-6'>
            <Link to="/sales-and-marketing/target" style={{ textDecoration: 'none', color: 'inherit' }}>
              Target            </Link>
          </li>
          <li className='col-6'>
            <Link to="/sales-and-marketing/sales" style={{ textDecoration: 'none', color: 'inherit' }}>
              Sales Life Cycle
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/sales-and-marketing/assignmentrules" style={{ textDecoration: 'none', color: 'inherit' }}>
              Assigment Rules
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Approval Process            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Setting
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Tracker Setting
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Sales & Mkt. Master
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              County
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              State
            </Link>
          </li>
          <li className='col-6'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              City
            </Link>
          </li>
         
     </ul>

    </div>
  )
}

export default SaleMarketing
