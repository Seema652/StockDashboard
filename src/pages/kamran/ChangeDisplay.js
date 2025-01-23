import React from 'react'
import { Link } from 'react-router-dom'

function ChangeDisplay() {
  return (
    <div className='card'>
        <div className='table-responsive active-projects style-1'>
            <h2 className='tbl-caption text-light'> Change Display Tabs
            <Link className="btn btn-primary btn-sm"  to="" role="button" aria-controls="offcanvasExample">
            + Change Display Added</Link></h2>
     {/* <button type="button" className="btn btn-secondary btn-sm" > + Invite Employee
                                    </button> */}
</div>
<form>
<div className='from-group col-4 '>
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
<div className='border-bottom' >
    <div>
        <h3 style={{fontSize: "16px", marginTop : "6px"}}>Realated Module </h3>
    </div>
</div>
<div className='row gap-3 mt-4 d-flex justify-content-center'>
                    <div className='col-5 border'>
                        
                        <h3>Available</h3>
                        <div style={{ textDecoration: "none" }}>
                            <ul>
                                <li><a href='account'>Account</a></li>
                                <li><a href='campaigns'>Campaigns</a></li>
                                <li><a href='contact'>Contact</a></li>
                                <li><a href='type-of-business'>Type Of Business</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-5 border'>
                        <h3>Select Tabs</h3>
                        <div style={{overflow: "hidden" }}>
                            <ul>
                                <li><a href='property'>Property</a></li>
                                <li><a href='tenant'>Tenant</a></li>
                                <li><a href='agent'>Agent</a></li>
                                <li><a href='block'>Blocks</a></li>
                                <li><a href='chargers'>Chargers</a></li>
                                <li><a href='rems'>REMS</a></li>
                                <li><a href='floor'>Floor</a></li>
                                <li><a href='brokers'>Brokers</a></li>
                            </ul>          
                        </div>
                    </div>
                </div>
                <div style={{margin: "10px 0px"}}> 
     <button type="button" class="btn btn-lg btn-primary" disabled>Save</button>
     <button type="button" class="btn btn-secondary btn-lg" disabled>Cancel</button>
     </div>
        </div>
             
             
  )
}

export default ChangeDisplay
