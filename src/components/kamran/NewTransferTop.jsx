import React from 'react'
import { Button } from 'react-bootstrap'
import { FaCalendarAlt } from 'react-icons/fa'

function NewTransferTop() {
  return (
    <div className='d-flex  align-items-center ' style={{marginTop : "10px", marginLeft : "10px"}}>
        <div>
                <FaCalendarAlt size={50}/>
                </div>
                <div className=''>
                  <h3>New Tranfer Booking</h3>
        </div>
        <div className=''>
        <button type="button" class="btn btn-link">Back</button>
        </div>
        </div>
     
  )
}

export default NewTransferTop
