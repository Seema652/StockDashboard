import React from 'react'

function TrackingText() {
  return (
    <div className='card'>
      <div className=''>
        <h3 className='border-bottom p-2'>Tracking Script</h3>
      </div>
      <form className='row'>
        <div className='col-6'>
            <select className='form-control'>
                <option className='fw-normal' value="">http (non secured site)</option>
                <option className='fw-normal' value="">http ( secured site)</option>
            </select>
        </div>
        <div className='mt-2'>
        <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea"></label>
</div>
        </div>
      </form>
    </div>
  )
}

export default TrackingText
