import React from 'react'
import { Link } from 'react-router-dom'

function NewSharning() {
  return (
   <div className='card'>
    <div className='table-responsive active-projects style-1'>
        <h2 className='tbl-caption text-light'>New Sharning
        <Link className="btn btn-primary btn-sm"  to="/addmembers" role="button" aria-controls="offcanvasExample">
        + Add New Members</Link>
        </h2>
    </div>
    <h3 className='border-bottom'style={{fontSize : "14px"}}>Details</h3>
    <form className='row'>
   
    <div className='from-group col-6 '>
   
                    <label htmlFor='caption'>Sharing</label>
                    <input type="text" class="form-control" id="caption" aria-describedby="caption" />
                </div>
                <div className='from-group col-6 '>
                    <label htmlFor='application'>Module</label>
                    <select type="text" class="form-control" id="application" aria-describedby="application">

                        <option value=""></option>
                        <option value="Account">Account</option>
                        <option value="brokers">Brokers</option>
                        <option value="booking">Booking</option>
                        <option value="bookingCancellation">Booking Cancellation</option>
                        <option value="agent">Agent</option>
                    </select>
                    </div>

    </form>
     </div>
  )
}

export default NewSharning
