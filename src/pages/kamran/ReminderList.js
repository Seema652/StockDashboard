import React from 'react'

function ReminderList() {
  return (
    <div className='card'>
        <div className='table-responsive active-projects style-1'>
            <h2 className='tbl-caption text-light'>My Reminder(s)</h2>
              </div>
      <form className='row'>
        
        <div className='from-group col-6 '>
   
   <label htmlFor='caption'>Subject</label>
   <input type="text" class="form-control" id="caption" aria-describedby="caption" />
</div>
<div className='from-group col-6 '>
   <label htmlFor='application'>Assigned To</label>
   <select type="text" class="form-control" id="application" aria-describedby="application">

       <option value=""></option>
       <option value="Account">Account</option>
       <option value="brokers">Brokers</option>
       <option value="booking">Booking</option>
       <option value="bookingCancellation">Booking Cancellation</option>
       <option value="agent">Agent</option>
   </select>
</div>
<div className='from-group col-6 '>
<label htmlFor="scheduleOn">Schedule On</label>
            <input
                type="date"
                className="form-control rounded-2"
                id="scheduleOn"
              />
      </div>
      <div className='from-group col-6 '>
   <label htmlFor='repeat'>Repeat</label>
   <select type="text" class="form-control" id="application" aria-describedby="application">

       <option value=""></option>
       <option value="Account">Account</option>
       <option value="brokers">Brokers</option>
       <option value="booking">Booking</option>
       <option value="bookingCancellation">Booking Cancellation</option>
       <option value="agent">Agent</option>
   </select>
</div>
<div class="mb-3 form-check col-6">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Notify</label>
                    </div>
                    <div class="mb-3 form-check col-6">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Email</label>
                    </div>
                    <div class="mb-3 form-check col-6">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Alert</label>
                    </div>
                    <div class="mb-3 form-check col-6">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">SMS</label>
                    </div>
      </form>
    </div>
  )
}

export default ReminderList
