import React from 'react'

function MessagingForm() {
  return (
    <div className='card'>
      <div className='row'>
        <div className='col-6 mt-2'>
            <input type='text' className= "form-control"aria-label='text' placeholder='Error Massage'/>
        </div>
        <div className='col-6 mt-2'>
            <input type='text' className= "form-control"aria-label='text' placeholder='Massage Type'/>
        </div>
      </div>
    </div>
  )
}

export default MessagingForm
