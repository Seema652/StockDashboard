import React from 'react'
import { TbUserCancel } from "react-icons/tb";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function BookingCancel() {
  return (
    <div className='card' style={{backgroundColor : "lightgrey", width: "50%", margin : "auto"  }}>
        <div className=''style={{display: "flex", gap: "4px"}}> 
        <div>
<TbUserCancel size={80}/> 
       </div>
       <div className=''>
        <h2>Booking Cancellation</h2>
        <p>Booking Cancellation provides the provision to cancel the <br/>booked unit by a customer</p>
       </div>

       </div>
       <div style={{margin:"10px 0"}}>
     <Link to="/formcancel" class="btn btn-lg btn-primary" disabled>Save</Link>
     <button type="button" class="btn btn-secondary btn-lg" disabled>Cancel</button>
     </div>
    </div>
    
  )
}

export default BookingCancel
